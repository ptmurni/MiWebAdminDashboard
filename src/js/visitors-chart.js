document.addEventListener("DOMContentLoaded", function() {
  const options = {
    series: [{
      name: 'Visitors',
      data: [30, 45, 35, 55, 30, 40, 30, 45, 35]
    }],
    chart: {
      height: 125,
      type: 'line',
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      },
    },
    colors: ['#7366ff'],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: ['#4099ff'],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 3,
    },
    grid: {
      borderColor: '#f1f1f1',
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: false
        }
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 10
      }
    },
    xaxis: {
      categories: ['0', '10k', '20k', '30k', '40k', '50k', '60k'],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      tooltip: {
        enabled: false
      },
      labels: {
        style: {
          colors: '#a1aab2',
          fontSize: '12px',
        }
      }
    },
    yaxis: {
      show: false
    },
    tooltip: {
      custom: function({series, seriesIndex, dataPointIndex, w}) {
        return `<div class="custom-tooltip">
          <div class="tooltip-marker"></div>
          <div class="tooltip-content">Growth: ${series[seriesIndex][dataPointIndex]}</div>
        </div>`;
      },
      fixed: {
        enabled: false,
        position: 'topRight',
      },
      marker: {
        show: false,
      },
      x: {
        show: false,
      },
    },
    markers: {
      size: 4,
      colors: ['#7366ff', '#4099ff'],
      strokeColors: '#fff',
      strokeWidth: 2,
      hover: {
        size: 6,
      }
    }
  };

  const chart = new ApexCharts(document.querySelector("#visitors-chart"), options);
  chart.render();
});