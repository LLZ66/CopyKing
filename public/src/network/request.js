import axios from 'axios'

export function request(config){
  const example = axios.create();
  return example(config)
}