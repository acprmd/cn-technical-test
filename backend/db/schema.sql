DROP TABLE IF EXISTS call_monitoring;

CREATE TABLE call_monitoring (
    id BIGSERIAL PRIMARY KEY,
    call_id VARCHAR(50) NOT NULL UNIQUE,
    call_timestamp TIMESTAMP NOT NULL,
    cs_name VARCHAR(100) NOT NULL,
    customer_name VARCHAR(100) NOT NULL,
    sentiment_score INTEGER NOT NULL CHECK (sentiment_score BETWEEN 0 AND 100)
);

CREATE INDEX idx_call_monitoring_timestamp ON call_monitoring(call_timestamp);
CREATE INDEX idx_call_monitoring_sentiment ON call_monitoring(sentiment_score);
