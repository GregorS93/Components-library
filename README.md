# Components Library

A React based project which shows a library of different popular components used in modern web development. It is meant to feature a few modern parts of today's web design properties.

## Table of Contents

1. [Features](#features)
2. [Getting Started](#getting-started)
3. [Usage](#usage)
4. [Available Scripts](#available-scripts)
5. [Dependencies](#dependencies)
6. [Project Structure](#project-structure)

## Features

- Modern usage and design
- Compatible for all types of devices
- React based project
- Clear and modular code structure

## Getting Started

### Installation

Install the dependencies and run the project

- npm install
- npm start

Head over to https://vitejs.dev/ to learn more about configuring vite

## Usage

To start the development server, run:
**npm run dev**
The application will be accessible at **http://localhost:5173.**

## Available Scripts

Available Scripts
In the project directory, you can run:

- npm run dev : Starts the development server
- npm run build : Builds the application for production
- npx prettier --check : Checks prettier formatting
- npx prettier --write : Runs prettier and formats it

## Dependencies

- "clsx": "^2.1.1",
- "react": "18.2.0",
- "react-dom": "18.2.0",
- "react-icons": "4.4.0",
- "vite": "latest"

## Project Structure

This project follows a modular structure for better organization and maintainability. Here's an overview of the folder structure:

- **components**: components used in multiple places.
  - **components names**: Individual folders for each component.
    - **picture/icons used in specific component**: Individual folders for all assets used in each component.
- **css**: View (page) specific css (style) files all exported into index.html.
- **hooks**: Global hooks used throughout the project.
- **node_modules**: stores all dependencies and libraries used throughout the project.
- **public**: Stores all static assets that are not processed by the build system

Below is an example folder structure for the "components" folder:

```
components/
└─ Toasts/
└─ icons/
├── component-files/

```
