import axios from "axios";

const BASE_URL = "http://localhost:3000/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjBlYmE3MmZlLTQ5MjMtNGEyZC1iODM0LWQwMGIwM2NjZDY3OSIsImlhdCI6MTY2NzUxNjA0MywiZXhwIjoxNjY4MTIwODQzfQ.yRVeli6VxPyWm3kzcF4vPSs-RVMD5MAQSHrVkXq_waE"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`}
})