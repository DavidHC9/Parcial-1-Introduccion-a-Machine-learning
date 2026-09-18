# 🌍 SIATA Air Quality Monitoring & ML System - Streamlit Web App

[![Python](https://img.shields.io/badge/Python-3.9%2B-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![Streamlit](https://img.shields.io/badge/Streamlit-1.25%2B-FF4B4B?style=for-the-badge&logo=streamlit&logoColor=white)](https://streamlit.io/)
[![Pandas](https://img.shields.io/badge/Pandas-1.5%2B-150458?style=for-the-badge&logo=pandas&logoColor=white)](https://pandas.pydata.org/)
[![Plotly](https://img.shields.io/badge/Plotly-5.0%2B-3F4F75?style=for-the-badge&logo=plotly&logoColor=white)](https://plotly.com/)
[![Folium](https://img.shields.io/badge/Folium-Geospatial-77B800?style=for-the-badge&logo=leaflet&logoColor=white)](https://python-visualization.github.io/folium/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

> **Plataforma de Analítica Avanzada, Modelado Predictivo e Interfaz Web Interactiva en Streamlit para la Red de Monitoreo de Calidad del Aire (SIATA) en el Valle de Aburrá, Colombia.**

---

## 📌 Estructura del Proyecto

La estructura del repositorio está optimizada para su despliegue directo en **[Streamlit Community Cloud (streamlit.io)](https://streamlit.io/)**:

```bash
.
├── app.py                  # Aplicación principal interactiva de Streamlit
├── style.css               # Estilos personalizados (Glassmorphism & Dark Mode)
├── index.html              # Landing Page web estática de presentación
├── README.md               # Documentación oficial del repositorio
├── .gitignore              # Archivos y carpetas ignoradas por Git
├── requirements.txt        # Dependencias de Python para Streamlit Cloud
└── LICENSE                 # Licencia de código abierto MIT
```

---

## ✨ Características Principales

1. **Ingesta Automatizada en Tiempo Real:** Consumo de la API pública SIATA para $PM_{2.5}$ en el Valle de Aburrá.
2. **Tablero de Indicadores (KPIs):** Métricas en vivo de estaciones activas, promedios, máximos y mínimos.
3. **Georreferenciación GIS Interactiva:** Mapa Leaflet/Folium con MarkerClusters y HeatMap integrado.
4. **Analítica Visual:** Gráficos dinámicos interactivos con Plotly (barras y distribución por categoría ICA).
5. **Modelo Predictivo de Machine Learning:** Algoritmo Random Forest Regressor para predecir concentraciones de $PM_{2.5}$ y clasificar nivel ICA.
6. **Calculadora & Simulador Normativo:** Cálculo dinámico según la escala EPA y normativa ambiental de Colombia.

---

## 🚀 Despliegue en Streamlit.io (Streamlit Cloud)

### 1. Subir el proyecto a GitHub
```bash
git init
git add .
git commit -m "Initial commit - Streamlit Ready"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
git push -u origin main
```

### 2. Publicar en Streamlit Cloud
1. Entra a **[share.streamlit.io](https://share.streamlit.io/)** e inicia sesión con tu cuenta de GitHub.
2. Haz clic en **"New app"**.
3. Selecciona tu repositorio, rama (`main`) y establece el archivo ejecutable: `app.py`.
4. Presiona **"Deploy!"** y tu aplicación estará disponible globalmente en la nube.

---

## 💻 Ejecución Local

Para ejecutar la aplicación localmente en tu equipo:

```bash
# 1. Instalar dependencias
pip install -r requirements.txt

# 2. Iniciar el servidor local de Streamlit
streamlit run app.py
```

Accede desde tu navegador a `http://localhost:8501`.

---

## 📄 Licencia

Este proyecto se distribuye bajo la licencia **MIT**. Consulta el archivo `LICENSE` para más detalles.
