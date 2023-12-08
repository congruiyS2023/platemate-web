# PlateMate Web Application

![Text Logo](https://github.com/congruiyS2023/platemate-web/blob/master/PlateMateTextLogo.png)

![Icon Logo](https://github.com/congruiyS2023/platemate-web/blob/master/PlateMateIconLogo.png)


## Overview

Welcome to the PlateMate Web Application, a dynamic web platform designed to streamline and enhance user interactions with the food and recycling industries. This repository contains the source code and resources for the PlateMate Web App.

## Features

### User Menu and Order Pages 
Enhanced user interfaces for intuitive navigation and ordering​​.

### Community Page
A dedicated section for community interactions, recently updated for better user experience​​.

### Recycling Company Integration
Specialized components for recycling company operations​​.

## Style Guide

Please refer to the [Figma Design File](https://www.figma.com/file/ORDe4AVRBV4Rim9l26Ivii/Style-Guides?type=design&node-id=0%3A1&mode=design&t=RGjcfbbPiQD4hEtt-1) or visit `/style-guide` or [Deployed Webpage](https://platemate-5f6stvuly-congruiys2023s-projects.vercel.app/style-guide) (Best viewed in mobile resolution).

## Technologies

### `JavaScript`
Main programming language, constituting 97.9% of the codebase​​.

### `HTML` and `CSS`
Used for structuring and styling the web application, accounting for 1.4% and 0.7% of the project respectively​​.

### `React.js`
Leveraging React for building user interfaces.

### `Tailwind CSS` and `Ant Design (antd)`
Utilized for styling and UI components​​.

## Getting Started

### Installation
Clone the repo and install dependencies using `npm install`.

### Running the App
Use `npm start` to run the app in development mode.

## Limitation

MVP for PlateMate has the following limitations:

### For all features
- Please use 390x844 resolution (or any other phone screen resolution) (with a desktop browser) for best experience
- There is no database storage 
- There is no access control 

*When logged in the app as a restaurant owner(`/login/restaurant`)*
### Login
- Any combination of username/password would work

### Community
- For now, PlateMate is not able to upload the picture of the food when creating/updating the post. Instead, an icon is used as a placeholder.

### Recycle
- For now, you can only chat to certain predefined companies, and no response should be expected.

### Reward
- For now, the receiver’s phone number is hard-coded. Any number you input would be interpreted as the same preset value.
- For now, PlateMate will not remember what coupon you create.

*When logged in the app as a restaurant customer(`/login/customer`)*
### Order Summary
- For now, coupons can only be applied once; otherwise, price is not updated correctly. 
- For now, available coupons are hard-coded.

### Misc
- For now, PlateMate only supports ordering in a predefined restaurant (Trattoria®).
- For now, PlateMate may forget that you’ve already joined the reward challenge. 

*When logged in the app as a recycle company(`/login/company`)*
### Login
- Any combination of username/password would work

### Orders
- For now, accepting or ignoring orders will have no effect on the display of the order list
- For now, you can only chat to certain predefined restaurants, and no response should be expected.
