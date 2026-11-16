import { dates } from "./dates.js";
import OpenAI from "openai";

//KEYS

const OPENAI_API_KEY = "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";
const POLYGON_API_KEY = "K7pp2o7H7xBuE5C01sscSnnJNzuZ9XaH";

const tickersArr = [];

//HTML ELEMENTS

const tickerForm = document.getElementById("ticker-input-form");

const tickerInput = document.getElementById("ticker-input");

const generateReportBtn = document.querySelector(".generate-report-btn");

const tickerDisplay = document.querySelector(".ticker-choice-display");

const actionPanel = document.querySelector(".action-panel");

const loadingPanel = document.querySelector(".loading-panel");

const outputPanel = document.querySelector(".output-panel");

const apiMessage = document.getElementById("api-message");

const errorMessage = document.getElementById("error-message");

//BUTTON OPERATIONS

tickerForm.addEventListener(
    "submit",
    handleTickerSubmit
);

generateReportBtn.addEventListener(
    "click",
    fetchStockData
);

//TICKET INPUT TAB

function handleTickerSubmit(e) {
    e.preventDefault();
    const ticker = tickerInput.value.trim().toUpperCase();
    errorMessage.textContent = "";

    if (ticker.length < 1) {
        return;
    }

    if (tickersArr.includes(ticker)) {
        errorMessage.textContent = "Ticker already added.";
        return;
    }

    if (tickersArr.length >= 3) {
        errorMessage.textContent = "Maximum 3 tickers allowed.";
        return;
    }

    tickersArr.push(ticker);

    tickerInput.value = "";

    renderTickers();

    generateReportBtn.disabled = tickersArr.length === 0;
}

// DISPLAY ENTERED DATA

function renderTickers() {
    tickerDisplay.innerHTML = "";

    tickersArr.forEach((ticker) => {
        const span = document.createElement("span");
        span.classList.add("ticker");
        span.textContent = ticker;
        tickerDisplay.appendChild(span);
    });
}

//FETCH DATA AND GIVE IT TO AI

async function fetchStockData() {
    try {
        actionPanel.style.display = "none";

        loadingPanel.style.display = "flex";

        apiMessage.textContent = "Fetching stock market data...";

        const stockData = await Promise.all(
            tickersArr.map(async (ticker) => {
                const url =
                    `https://polygon.io/v2/aggs/ticker/${ticker}` + `/range/1/day/${dates.startDate}/${dates.endDate}` + `?adjusted=true&sort=asc&apiKey=${POLYGON_API_KEY}`;

                const response =
                    await fetch(url);

                if (!response.ok) {
                    throw new Error(`Failed to fetch ${ticker}`);
                }
                return await response.text();
            })
        );

        apiMessage.textContent = "Creating DARSHAN'S report...";

        await fetchReport(
            stockData.join("\n\n")
        );
    } catch (err) {
        console.error(err);

        apiMessage.textContent = "Something went wrong while fetching stock data.";
    }
}

// GENERATING AI'S REPORT

async function fetchReport(data) {
    try {
        const openai = new OpenAI({
            apiKey: OPENAI_API_KEY,
            dangerouslyAllowBrowser: true
        });

         const messages = [
            {
                role: "system",
                content: `
                            You are an expert stock market analyst.

                            Analyze the provided stock data.

                            For each stock:
                            - Explain recent performance
                            - Mention strengths
                            - Mention risks

                            Then compare all stocks.

                            Finally provide:
                            1. Best Buy
                            2. Best Hold
                            3. Highest Risk

                            Keep the report beginner friendly.
                            `
            },
            {
                role: "user",
                content: data
            }
        ];

        const response =
            await openai.chat.completions.create({
                model: "gpt-4",
                messages: messages,
                temperature: 1.1,
                presence_penalty: 0,
                frequency_penalty: 0
            });

        const report = response.choices[0].message.content;
        renderReport(report);

    } catch (err) {
        console.error(err);

        apiMessage.textContent = "Unable to generate AI report.";
    }
}

// DISPLAY AI GENERATED REPORT

function renderReport(report) {
    loadingPanel.style.display = "none";

    outputPanel.style.display = "flex";

    outputPanel.innerHTML = `
        <div class="report-card">
            <h2>AI Stock Analysis Report</h2>
            <p>${report.replace(/\n/g, "<br>")}</p>
        </div>
    `;
}