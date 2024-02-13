import {baseURL} from "../const/urls";
import axios from "axios";

export const axiosService = axios.create({baseURL})