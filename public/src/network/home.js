import {request} from "./request"
import fs from "fs"

export function getTextData(config) {
  return request({
    method: config.method,
    url:"/json/text.json"
  })
}
export function saveTextData(data) {
  
}