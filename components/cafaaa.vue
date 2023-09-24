<template>
    <body>
        <div class="card">
            <img src="/vite-projent_componen+router/img/คาเฟ่.jpg" style="object-fit:cover;">
        
        <h2>
            ร้านคาเฟ่ที่มาแรงที่สุดในช่วนี้ไม่ว่าจะแพลตฟอร์มไหนก็แซงหน้าทุกร้านที่ผ่านมา ไม่ว่าจะเป็นเพราะการบริการหรือว่าคุณภาพในการชงกาแฟ และแน่นอนที่ขาดไปไม่ได้คือการตกแต่งร้านที่ทันสมัยและคุมโทนอบอุ่น ละมุนตาโดยออกแบบดพื่อคำนึงถึงความสบายใจและสบายตาของลูกค้าที่ไม่ว่าจะมาพักผ่อนหย่อนใจโดยการนั้งจิบกาแฟ หรือมาทำงาน  ก็พร้อมต้อนรับและบริการด้วยหัวใจ
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