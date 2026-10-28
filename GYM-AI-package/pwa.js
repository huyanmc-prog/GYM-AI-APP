if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js',{scope:'./'}).catch(error=>console.warn('Không thể bật chế độ ngoại tuyến',error)))}
