import { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);

function Sip() {
  const [monthInvest, setMonthInvest] = useState(100);
  const [expectedReturnRate, setExpectedReturnRate] = useState(1);
  const [timePeriod, setTimePeriod] = useState(1);

  const investedAmount = monthInvest * timePeriod * 12;
  const estimatedReturn = Math.round(
    investedAmount * (expectedReturnRate / 100)
  );
  const totalValue = investedAmount + estimatedReturn;
  // const totalValue=monthInvest* ((((1 + 0.01)**12) - 1)/ 0.01) * (1 + 0.01)

  const data = {
    labels: ["Invested Amount", "Estimated Return"],
    datasets: [
      {
        data: [investedAmount, estimatedReturn],
        backgroundColor: ["#36A2EB", "#FF6384"],
        hoverBackgroundColor: ["#36A2EB", "#FF6384"],
      },
    ],
  };

  return (
    <div>
      <div className="w-full flex justify-between items-center">
        <h1>Monthly Investment</h1>
        <div className="relative">
          <span className="absolute left-2 top-1/2 transform -translate-y-1/2">
            ₹
          </span>
          <input
            type="number"
            value={monthInvest}
            onChange={(e) => setMonthInvest(e.target.value)}
            className="border border-gray-300 bg-blue-100 text-black pl-6"
          />
        </div>
      </div>
      <div className="w-full">
        <input
          type="range"
          min={100}
          max={1000000}
          value={monthInvest}
          onChange={(e) => setMonthInvest(e.target.value)}
          className="w-full py-6"
        />
      </div>
      <div className="w-full flex justify-between items-center">
        <h1>Expected Return Rate (p.a)</h1>
        <div className="relative">
          <input
            type="number"
            value={expectedReturnRate}
            onChange={(e) => setExpectedReturnRate(e.target.value)}
            className="border border-gray-300 bg-blue-100 text-black pr-6"
          />
          <span className="absolute right-2 top-1/2 transform -translate-y-1/2">
            %
          </span>
        </div>
      </div>
      <div className="w-full">
        <input
          type="range"
          min={1}
          max={100}
          value={expectedReturnRate}
          onChange={(e) => setExpectedReturnRate(e.target.value)}
          className="w-full py-6"
        />
      </div>
      <div className="w-full flex justify-between items-center">
        <h1>Time Period</h1>
        <div className="relative">
          <input
            type="number"
            value={timePeriod}
            onChange={(e) => setTimePeriod(e.target.value)}
            className="border border-gray-300 bg-blue-100 text-black pr-6"
          />
          <span className="absolute right-2 top-1/2 transform -translate-y-1/2">
            years
          </span>
        </div>
      </div>
      <div className="w-full">
        <input
          type="range"
          min={1}
          max={100}
          value={timePeriod}
          onChange={(e) => setTimePeriod(e.target.value)}
          className="w-full py-6"
        />
      </div>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h1>Invested Amount</h1>
          <h1>₹ {investedAmount}</h1>
        </div>
        <div className="flex justify-between items-center">
          <h1>Est. Return</h1>
          <h1>₹ {estimatedReturn}</h1>
        </div>
        <div className="flex justify-between items-center">
          <h1>Total Value</h1>
          <h1>₹ {totalValue}</h1>
        </div>
      </div>
      <div className="w-full">
        <Pie data={data} />
      </div>
    </div>
  );
}

export default Sip;
