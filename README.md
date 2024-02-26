# Chopsticks: AI-Powered Editing Software

## [Check us out](chopsticks.streamlit.app)

## Inspiration

In today's digital era, content creation is at an all-time high, yet the tools available are not always user-friendly, especially for non-experts. After conducting extensive market research with numerous Twitch and YouTube creators, we identified a niche issue: the significant challenge content creators face when editing lengthy videos. The existing editing tools are often complex and not intuitive, leading creators to spend excessive time learning or outsourcing, which can be costly. Addressing these challenges, we introduce Chopsticks, an AI-powered editing software designed to streamline the editing process, improve user experience, and increase creator profits.

## What It Does

Chopsticks revolutionizes video editing with its dual-use system. Our platform leverages deep learning to provide a chat-powered interface for text queries and video manipulation, alongside an analytics component that identifies the most entertaining and important parts of a video. This innovative approach allows creators to efficiently produce short-form content from longer videos, significantly enhancing content quality and viewer engagement.

## How We Built It

Our system employs a combination of advanced technologies:
- Voice transcription with Whisper.
- Chat log analysis through OCR/Web Scraping.
- Creator expressions captured using OpenCV.
- Viewer engagement and sentiment analysis using a fine-tuned Roberta model.
- Key moments identification via a fine-tuned T5 text-text analysis model.
- DeepFace model for reading streamer's reactions.
- Our proprietary LLM-based video clipping tool for generating short-form content.
- Reflex for crafting a user-friendly editing interface.

These components work together to transform lengthy videos into engaging clips by analyzing engagement metrics and streamer reactions.

## Challenges We Ran Into

Identifying what constitutes "entertaining" content was a major challenge due to the subjective nature of human emotions. Additionally, the initial processing time for videos was impractical, prompting us to optimize our algorithms and employ better hardware to significantly reduce the time required for content analysis.

## Accomplishments We're Proud Of

- Developing a unique solution that addresses real-world problems faced by content creators.
- Learning and integrating new technologies to bring our idea to life.
- Generating high-quality short-form content that validated our concept and technical approach.

## What's Next for Chopsticks

We aim to launch Chopsticks as an open-source platform to build community trust and engagement, followed by a transition to a subscription-based model to sustain and scale our operations. Our vision extends beyond commercial success; we aspire to contribute positively to the community, particularly in educational contexts by making learning content more accessible and engaging.


