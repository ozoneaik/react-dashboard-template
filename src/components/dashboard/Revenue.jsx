import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


const Utils = {
    numbers(cfg) {
        return Array.from({length: cfg.count}, () => Math.random() * (cfg.max - cfg.min) + cfg.min);
    },
};
const DATA_COUNT = 12;
const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom',
            labels: {
                usePointStyle: true, // This enables the circle icon
            },
        },
    },
};

const labels = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: Utils.numbers(NUMBER_CFG),
            backgroundColor: '#5A6ACF',
        },
        {
            label: 'Dataset 2',
            data: Utils.numbers(NUMBER_CFG),
            backgroundColor: '#E6E8EC',
        },
    ],
};

export function Revenue() {
    return <Bar options={options} data={data} />;
}
