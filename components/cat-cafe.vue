<template>
    <body>
        <div class="card">
            <img src="/vite-projent_componen+router/img/คาเฟ่แมว.jpg" style="object-fit:cover;">
        
        <h2>
            คาเฟ่แมวที่พร้อมฮีลใจของคุณไม่ว่าจะผ่านอะไรมา ก็จะมีน้องแมวเหมียวมากหน้าหลายตามารอพร้อมบริการคุณอย่างเต็มความสามารถเพียงให้ขนมและอาหารที่เจ้านายชอบ!!
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