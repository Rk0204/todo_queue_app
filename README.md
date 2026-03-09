# React Todo Queue App

A simple todo app built with React and Node.js demonstrating asynchronous job processing similar to BullMQ.

## Tech Stack

Frontend
- React (Vite)
- TailwindCSS
- DaisyUI

Backend
- Node.js
- Express

Queue
- Array-based queue simulating BullMQ workers

## Features

- Fetch tasks from JSONPlaceholder
- Delete tasks asynchronously using a job queue
- Responsive UI with Tailwind + DaisyUI
- Basic error handling

## How Queue Works

When a delete request is sent:

1. API pushes a job into an in-memory queue
2. Worker checks queue every second
3. Job is processed with delay
4. Task removed

This mimics background workers like BullMQ.

## Run Project

Backend

cd backend
node server.js

Frontend

cd frontend
npm run dev

open

http://localhost:5173