export const getdatabypathparams = (data, loctype, locname) => {
  return data.filter((destinations) => {
    return destinations[loctype].toLowerCase() === locname.toLowerCase()

  })
}