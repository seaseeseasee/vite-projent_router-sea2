<template>
    <body>
        <div class="card">
            <img src="/vite-projent_componen+router/img/คาเฟ่หมา.jpg" style="object-fit:cover;">
        
        <h2>
            คาเฟ่น้องมะหมาสุดน่ารักไม่ว่าจะสายพันธุ์เล็ก-ใหญ่ที่พร้อมคลอเคียเพื่อลดและขจัดความเหนื่อยล้าจากการทำงานที่มีระบบทุนนิยมเป็นตัวชี้วัดในความสำเร็จ มาหาเราสิ เรามีน้องหมาที่น่ารักพร้อมให้บริการคุณไม่ว่าจะเป็นน้องหมาสายพันธุ์ไหน!!
        </h2>
        </div>
    </body>
    </template>
    
    <style>
    body {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh; /* ทำให้ .card อยู่ตรงกลางของหน้าจอ */
        margin: 0;
    }
    
    .card {
        width: auto;
        height: auto;
        min-height: 500px;
        max-width: 1000px;
        background-color: rgb(192, 11, 149);
        display: flex;
        flex-direction: column; /* เรียง .card แนวตั้ง */
        align-items: center;
        cursor: pointer;
        border-radius: 20px;
        box-shadow: 5px 20px 10px rgba(0, 0, 0, 0.3);
    }
    
    h2 {
        color: aliceblue;
        margin: 20px;
    }
    .card img{
        margin: 20px;
    }
    </style>