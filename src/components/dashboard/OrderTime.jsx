
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

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

const data = {
    labels: ['Afternoon', 'Evening', 'Morning'],
    datasets: [
        {
            label: '# of Votes',
            data: [40, 32, 28],
            backgroundColor: [
                '#5a6acf',
                '#8593ed',
                '#c7ceff',

            ],
        },
    ],
};

export function OrderTime() {
    return <Doughnut data={data} options={options} />;
}
