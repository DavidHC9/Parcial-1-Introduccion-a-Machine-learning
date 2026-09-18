// Datos Simulados / Reales de SIATA API
const sampleStations = [
    { name: "Medellín - Belén", lat: 6.2312, lng: -75.5891, pm25: 14.2 },
    { name: "Medellín - El Poblado", lat: 6.2089, lng: -75.5678, pm25: 18.5 },
    { name: "Medellín - Centro", lat: 6.2518, lng: -75.5636, pm25: 32.1 },
    { name: "Itagüí - Casa de la Cultura", lat: 6.1722, lng: -75.6094, pm25: 22.4 },
    { name: "Bello - Comfenalco", lat: 6.3315, lng: -75.5561, pm25: 11.8 },
    { name: "Envigado - Hospital", lat: 6.1667, lng: -75.5833, pm25: 15.6 }
];

document.addEventListener("DOMContentLoaded", () => {
    initCharts();
    initMap();
    initSimulator();
});

// Inicializar Gráficos con Chart.js
function initCharts() {
    // 1. Chart Distribución ICA
    const ctxIca = document.getElementById('icaChart').getContext('2d');
    new Chart(ctxIca, {
        type: 'doughnut',
        data: {
            labels: ['Buena', 'Moderada', 'Grupos Sensibles', 'Mala'],
            datasets: [{
                data: [12, 8, 3, 1],
                backgroundColor: ['#10B981', '#F59E0B', '#F97316', '#EF4444'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { color: '#94A3B8', font: { family: 'Plus Jakarta Sans' } }
                }
            }
        }
    });

    // 2. Chart Tendencia
    const ctxTrend = document.getElementById('trendChart').getContext('2d');
    new Chart(ctxTrend, {
        type: 'line',
        data: {
            labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
            datasets: [{
                label: 'Promedio PM2.5 (µg/m³)',
                data: [12.5, 11.2, 24.8, 19.3, 16.5, 14.2],
                borderColor: '#38BDF8',
                backgroundColor: 'rgba(56, 189, 248, 0.1)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: { ticks: { color: '#94A3B8' }, grid: { color: 'rgba(255,255,255,0.05)' } },
                y: { ticks: { color: '#94A3B8' }, grid: { color: 'rgba(255,255,255,0.05)' } }
            },
            plugins: {
                legend: { labels: { color: '#94A3B8' } }
            }
        }
    });
}

// Inicializar Mapa Leaflet GIS
function initMap() {
    const map = L.map('map').setView([6.2518, -75.5636], 11);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap &copy; CARTO',
        maxZoom: 18
    }).addTo(map);

    sampleStations.forEach(st => {
        const info = getICAStatus(st.pm25);
        L.circleMarker([st.lat, st.lng], {
            radius: 10,
            fillColor: info.color,
            color: '#fff',
            weight: 1,
            opacity: 1,
            fillOpacity: 0.85
        }).addTo(map).bindPopup(`
            <div style="color: #000; font-family: sans-serif;">
                <strong>${st.name}</strong><br>
                PM2.5: ${st.pm25} µg/m³<br>
                Estado: <b>${info.label}</b>
            </div>
        `);
    });
}

// Lógica de cálculo ICA
function getICAStatus(pm25) {
    if (pm25 <= 12) return { label: 'BUENA', color: '#10B981', title: 'Excelente Calidad del Aire', desc: 'La calidad del aire se considera satisfactoria y representa poco o ningún riesgo.' };
    if (pm25 <= 35.4) return { label: 'MODERADA', color: '#F59E0B', title: 'Calidad Aceptable', desc: 'Aceptable; sin embargo, grupos muy sensibles pueden experimentar síntomas leves.' };
    if (pm25 <= 55.4) return { label: 'GRUPOS SENSIBLES', color: '#F97316', title: 'Dañina para Grupos Sensibles', desc: 'Niños, adultos mayores y personas con enfermedades respiratorias deben limitar esfuerzos al aire libre.' };
    return { label: 'MALA', color: '#EF4444', title: 'Alerta de Calidad del Aire', desc: 'Toda la población puede comenzar a experimentar efectos en la salud.' };
}

// Inicializar Simulador Interactivo
function initSimulator() {
    const input = document.getElementById('pm25-input');
    const btn = document.getElementById('calc-btn');

    const updateCalc = () => {
        const val = parseFloat(input.value) || 0;
        const res = getICAStatus(val);
        
        const badge = document.getElementById('ica-badge-status');
        badge.innerText = res.label;
        badge.style.backgroundColor = res.color;

        document.getElementById('result-title').innerText = res.title;
        document.getElementById('result-desc').innerText = res.desc;
    };

    btn.addEventListener('click', updateCalc);
    input.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') updateCalc();
    });
}
