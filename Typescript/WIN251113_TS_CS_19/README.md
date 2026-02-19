# TypeScript Case Study 19: IoC Containers & Advanced Dependency Management

### NPTEL Pinternship – IIT Ropar

**Sohan Roy Talari (WIN251113)**
Required Libraries: `typedi`, `reflect-metadata`

## Description

This case study demonstrates the use of **Inversion of Control (IoC) containers** for managing dependencies
in a TypeScript application.

It showcases how to register multiple implementations of an interface and swap them dynamically
without changing the dependent code.

The example uses a **NewsAggregator** that can fetch news articles from different sources:

- RSSFeedSource
- APISource
- MockNewsSource

based on configuration.

## Steps to Run

1. **Extract** the zip file and navigate to the project directory:

    ```
    cd WIN251113_TS_CS_19
    ```

2. **Install** dependencies:

    ```
    npm install typedi reflect-metadata ts-node
    ```

3. **Run** the application:
    ```
    ts-node src/index.ts
    ```

## Tasks in Case Study

1. Register a new APISource with the container.
    - Present in 'src/APISource.ts'

2. Swap the implementation from RSSFeedSource to APISource without changing the NewsAggregator code.
    - Present in 'src/index.ts'

3. Write a test that injects a mock source to verify the aggregator’s behavior.
    - Present in 'src/index.ts'
