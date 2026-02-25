# React Frontend

โปรเจกต์ React Frontend สร้างด้วย **Vite** + **React 19** สำหรับเรียนรู้พื้นฐาน React เช่น Component, Props, State และ Event Handling

## Tech Stack

- **React** 19.2
- **Vite** 7.3
- **prop-types** สำหรับตรวจสอบ Props
- **ESLint** สำหรับตรวจสอบคุณภาพโค้ด

## โครงสร้างโปรเจกต์

```
react-frontend/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── Contact.jsx      # Component แสดงข้อมูลติดต่อ (email, phone)
│   │   ├── Counter.jsx       # Component ตัวนับ เพิ่ม/ลดค่าด้วยปุ่ม (useState)
│   │   ├── Hello.jsx         # Component แสดงข้อความทักทายพร้อมชื่อ
│   │   └── react.svg
│   ├── App.jsx               # Component หลัก รวม Counter, Hello, Contact
│   ├── App.css               # สไตล์สำหรับ App
│   ├── index.css             # Global styles
│   └── main.jsx              # Entry point (StrictMode + ReactDOM)
├── index.html                # HTML template
├── vite.config.js            # Vite config (plugin-react)
├── eslint.config.js          # ESLint config
├── package.json
└── README.md
```

## Components

### `Counter`

- ใช้ `useState` Hook จัดการ state ตัวนับ
- มีปุ่ม **increment** และ **decrement** สำหรับเพิ่ม/ลดค่า

### `Hello`

- รับ props `name` และ `message` แสดงข้อความทักทาย
- ใช้ `PropTypes` ตรวจสอบ props
- ถูกเรียกใช้ผ่าน `Array.map()` เพื่อ render หลายรายการจากข้อมูล

### `Contact`

- รับ props `email` และ `phone` แสดงข้อมูลติดต่อ
- ใช้ `PropTypes` ตรวจสอบ props

## วิธีติดตั้งและรันโปรเจกต์

### ติดตั้ง Dependencies

```bash
npm install
```

### รันโปรเจกต์ (Development)

```bash
npm run dev
```

### Build สำหรับ Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### ตรวจสอบโค้ดด้วย ESLint

```bash
npm run lint
```
