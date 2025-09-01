**Visual Product Search System**

A full-stack project that allows users to search for products visually. Upload an image or provide an image URL, and the system returns the most visually similar products from the database.

Project Overview

This project consists of three main services:

Frontend

Built with HTML, CSS, and JavaScript.

Provides a user interface to upload images or submit image URLs.

Displays the search results in a responsive and user-friendly layout.

Backend

Node.js + Express server.

Handles incoming requests from the frontend.

Calls the ML-service to get image embeddings.

Stores product metadata and precomputed embeddings in MongoDB.

Performs cosine similarity computation to return the most similar products.

ML-Service

Python + Flask service.

Uses PyTorch ResNet18 (pretrained) to extract image embeddings.

Accepts file uploads or image URLs.

Returns embeddings in JSON format.

Features

Upload an image or provide an image URL for visual search.

Cosine similarity-based product matching.

Returns top N visually similar products.

Deduplication of results to avoid repeated images.

MongoDB integration for storing product metadata and embeddings.
