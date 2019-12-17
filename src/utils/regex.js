/* eslint-disable */
export const phoneRegex = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
export const colorRegex = /^#[0-9a-fA-F]{6}$/;
export const secureUrlRegex = /^https:\/\/[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
export const urlRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
export const twitterUrlRegex = /^(?:http(s)?:\/\/)?(www\.)?twitter\.com\/[A-z0-9_]+\/?$/;
export const facebookUrlRegex = /^(?:http(s)?:\/\/)?(www\.)?(facebook|fb)\.com\/[A-z0-9_\-\.]+\/?$/;
export const instagramUrlRegex = /^(?:http(s)?:\/\/)?(www\.)?instagram\.com\/([A-Za-z0-9_](?:(?:[A-Za-z0-9_]|(?:\.(?!\.))){0,28}(?:[A-Za-z0-9_]))?)\/?$/;
