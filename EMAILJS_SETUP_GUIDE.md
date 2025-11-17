# EmailJS 设置指南 / EmailJS Setup Guide

## 📧 配置步骤 / Configuration Steps

### 1. 创建 EmailJS 账号 / Create EmailJS Account
1. 访问 https://www.emailjs.com/
2. 点击 "Sign Up" 创建免费账号
3. 登录到控制台: https://dashboard.emailjs.com/

---

### 2. 添加邮件服务 / Add Email Service

1. 在左侧菜单点击 **"Email Services"**
2. 点击 **"Add New Service"**
3. 选择你的邮件服务商（推荐使用 Gmail）
4. 配置服务:
   - **Service Name**: EXP Finance Contact
   - **Service ID**: 会自动生成，保存这个ID
   
#### Gmail 配置 (推荐):
- 登录你的 Gmail 账号
- 允许 EmailJS 访问权限
- **测试邮箱**: chsh48@gmail.com
- **正式邮箱**: hello@expfin.co.nz

5. 点击 **"Create Service"**
6. **保存生成的 Service ID** (例如: service_abc123)

---

### 3. 创建邮件模板 / Create Email Template

1. 在左侧菜单点击 **"Email Templates"**
2. 点击 **"Create New Template"**
3. 配置模板:

#### Template Settings:
- **Template Name**: Contact Form Submission
- **Template ID**: 会自动生成，保存这个ID

#### Template Content (推荐配置):

**Subject (邮件主题):**
```
新的咨询信息 - {{name}}
```

**Content (邮件内容):**
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
  <h2 style="color: #f59e0b; border-bottom: 2px solid #f59e0b; padding-bottom: 10px;">
    新的客户咨询 / New Customer Inquiry
  </h2>
  
  <div style="margin: 20px 0;">
    <h3 style="color: #333; margin-bottom: 15px;">客户信息 / Contact Information</h3>
    
    <table style="width: 100%; border-collapse: collapse;">
      <tr style="background-color: #f9fafb;">
        <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold; width: 30%;">姓名 / Name:</td>
        <td style="padding: 10px; border: 1px solid #e5e7eb;">{{name}}</td>
      </tr>
      <tr>
        <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">邮箱 / Email:</td>
        <td style="padding: 10px; border: 1px solid #e5e7eb;">{{email}}</td>
      </tr>
      <tr style="background-color: #f9fafb;">
        <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">电话 / Phone:</td>
        <td style="padding: 10px; border: 1px solid #e5e7eb;">{{phone}}</td>
      </tr>
    </table>
  </div>
  
  <div style="margin: 20px 0;">
    <h3 style="color: #333; margin-bottom: 10px;">咨询内容 / Message</h3>
    <div style="background-color: #f9fafb; padding: 15px; border-radius: 5px; border-left: 4px solid #f59e0b;">
      {{message}}
    </div>
  </div>
  
  <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; font-size: 12px; color: #666;">
    <p><strong>提交时间 / Submission Time:</strong> {{submission_time}}</p>
    <p style="margin-top: 10px;">此邮件由 EXP Finance 网站表单自动发送</p>
    <p>This email was automatically sent from the EXP Finance website contact form</p>
  </div>
</div>
```

**To Email (收件人):**
```
chsh48@gmail.com
```
注意: 正式上线后改为 `hello@expfin.co.nz`

**From Name:**
```
EXP Finance Website
```

**Reply To:**
```
{{email}}
```
这样你回复邮件时会直接回复给客户

4. 在右侧 **"Test it"** 面板测试模板，填写示例数据
5. 点击 **"Send Test"** 检查邮件是否正确发送
6. 保存模板并**记录 Template ID** (例如: template_xyz789)

---

### 4. 获取 Public Key / Get Public Key

1. 点击左侧菜单的 **"Account"**
2. 找到 **"API Keys"** 部分
3. 复制 **"Public Key"** (例如: abc123XYZ789)

---

### 5. 配置环境变量 / Configure Environment Variables

在项目根目录的 `.env` 文件中填入你的配置:

```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=abc123XYZ789
```

**重要提示 / Important Notes:**
- ⚠️ 不要把 `.env` 文件提交到 Git (已在 .gitignore 中)
- ⚠️ 每次修改 `.env` 需要重启开发服务器
- ⚠️ 部署到生产环境时，在托管平台（如 Vercel/Netlify）的环境变量设置中添加这些变量

---

### 6. 测试表单 / Test the Form

1. 重启开发服务器:
   ```bash
   npm run dev
   ```

2. 打开网站，滚动到联系表单
3. 填写测试信息并提交
4. 检查 `chsh48@gmail.com` 是否收到邮件
5. 在 EmailJS 控制台的 **"Email History"** 查看发送记录

---

### 7. 切换到正式邮箱 / Switch to Production Email

#### 方法一：直接修改现有模板 (推荐用于测试完成后)

1. 登录 EmailJS 控制台: https://dashboard.emailjs.com/
2. 在左侧菜单点击 **"Email Templates"**
3. 找到你创建的模板（例如：Contact Form Submission）
4. 点击模板进入编辑页面
5. 找到 **"To Email"** 字段
6. 将邮箱从 `chsh48@gmail.com` 改为: `hello@expfin.co.nz`
7. 点击 **"Save"** 保存更改
8. 点击右侧的 **"Test it"** 发送测试邮件到新邮箱验证

#### 方法二：创建生产环境专用模板 (推荐用于同时维护测试和生产)

如果你想保留测试模板，可以创建两个模板：

**测试模板设置：**
1. 创建模板：**"Contact Form - Test"**
2. Template ID 例如: `template_test_123`
3. To Email: `chsh48@gmail.com`
4. 在 `.env` 中使用: `VITE_EMAILJS_TEMPLATE_ID=template_test_123`

**生产模板设置：**
1. 创建新模板：**"Contact Form - Production"**
2. Template ID 例如: `template_prod_456`
3. To Email: `hello@expfin.co.nz`
4. 复制所有模板内容（Subject, Content, From Name, Reply To 都一样）
5. 部署到生产时，在服务器环境变量中设置: `VITE_EMAILJS_TEMPLATE_ID=template_prod_456`

#### 方法三：使用 EmailJS 的多收件人功能

在模板的 **"To Email"** 字段可以设置多个收件人：
```
chsh48@gmail.com, hello@expfin.co.nz
```
这样测试和生产邮箱都会收到邮件（但不推荐长期使用）。

#### ⚠️ 重要提醒

- 切换邮箱后，务必发送测试邮件确认 `hello@expfin.co.nz` 能正常接收
- 检查 `hello@expfin.co.nz` 的垃圾邮件文件夹
- 建议在 Gmail 或邮箱服务商中添加 EmailJS 到白名单
- 如果使用 Gmail 转发到 `hello@expfin.co.nz`，确保转发规则已设置好

---

## 📊 EmailJS 免费套餐限制 / Free Plan Limits

- 每月 200 封邮件
- 适合中小型网站
- 如果需要更多，可以升级到付费套餐

---

## 🔧 故障排查 / Troubleshooting

### 邮件发送失败?
1. 检查控制台是否有错误信息
2. 确认 `.env` 文件中的三个 ID 都正确
3. 检查 EmailJS 控制台的 "Email History" 查看错误详情
4. 确认邮件服务已正确连接（Email Services 页面）

### 收不到邮件?
1. 检查垃圾邮件文件夹
2. 确认模板中的 "To Email" 设置正确
3. 在 EmailJS 模板中发送测试邮件验证

### 环境变量不生效?
1. 确保变量名以 `VITE_` 开头
2. 重启开发服务器 (Ctrl+C 然后 `npm run dev`)
3. 清除浏览器缓存

---

## 📝 表单字段说明 / Form Fields

当前表单会发送以下字段到 EmailJS:
- `name` - 客户姓名
- `email` - 客户邮箱
- `phone` - 客户电话（可选）
- `message` - 咨询内容

这些字段名需要与 EmailJS 模板中的变量名 `{{name}}`, `{{email}}`, `{{phone}}`, `{{message}}` 对应。

---

## 🚀 部署到生产环境 / Deploy to Production

### Vercel:
1. 在项目设置中添加环境变量
2. Settings → Environment Variables
3. 添加三个变量（不要带引号）

### Netlify:
1. Site settings → Environment variables
2. 添加三个变量

---

## 📞 技术支持 / Support

如有问题，请查看:
- EmailJS 文档: https://www.emailjs.com/docs/
- EmailJS 支持: https://www.emailjs.com/docs/faq/

---

**更新日期 / Last Updated:** 2024-11-17
