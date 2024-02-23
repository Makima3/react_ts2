import axios from "axios";
import {baseURL} from "../const";

export const axiosService = axios.create({baseURL})