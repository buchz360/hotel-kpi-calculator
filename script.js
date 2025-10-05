const roomsAvailable = document.getElementById("roomsAvailable");
const roomsSold = document.getElementById("roomsSold");
const roomRevenue = document.getElementById("roomRevenue");

const occupancyEl = document.getElementById("occupancy");
const adrEl = document.getElementById("adr");
const revparEl = document.getElementById("revpar");

function formatCurrency(value) {
  return `$${parseFloat(value).toFixed(2)}`;
}

function calculateKPI() {
  const available = parseFloat(roomsAvailable.value) || 0;
  const sold = parseFloat(roomsSold.value) || 0;
  const revenue = parseFloat(roomRevenue.value) || 0;

  // Occupancy
  const occupancy = available > 0 ? (sold / available) * 100 : 0;
  occupancyEl.textContent = available > 0 ? `${occupancy.toFixed(2)}%` : "N/A";

  // ADR
  const adr = sold > 0 ? (revenue / sold) : 0;
  adrEl.textContent = sold > 0 ? formatCurrency(adr) : "$0.00";

  // RevPAR
  const revpar = available > 0 ? (revenue / available) : 0;
  revparEl.textContent = available > 0 ? formatCurrency(revpar) : "$0.00";
}

roomsAvailable.addEventListener("input", calculateKPI);
roomsSold.addEventListener("input", calculateKPI);
roomRevenue.addEventListener("input", calculateKPI);
