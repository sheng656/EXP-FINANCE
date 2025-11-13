# WeChat QR Codes

This directory contains WeChat QR code images used across the website.

## Current QR Codes

### Michelle's WeChat QR Code
- **Filename**: `michelle-wechat.jpg` (or `.png`)
- **Usage**: Displayed when users click "添加微信" / "WeChat" buttons
- **Locations**:
  - Hero section "微信咨询" button
  - Floating action bar WeChat button
  - Contact section WeChat button

## File Requirements

- **Format**: JPG or PNG
- **Recommended Size**: At least 500x500 pixels
- **Aspect Ratio**: Square (1:1)

## How to Update

1. Save your WeChat QR code image to this directory
2. Name it: `michelle-wechat.jpg` (or `.png`)
3. The modal will automatically display the new QR code

## Adding More QR Codes

If you need to add QR codes for other team members:

1. Save the image as: `[name]-wechat.jpg`
2. Update the `WeChatModal` component to accept a dynamic image path
3. Pass the appropriate QR code path when opening the modal

---

**Current Setup**: All WeChat buttons show Michelle's QR code
