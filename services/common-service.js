
function currencyFormat(amount = amount.toString(), currency = ' ₫') {
    if (amount) {
      let str = amount.toString();
      const curr = currency.toString();
      str = str.trim();
      return str.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + curr;
    } else {
      return '-';
    }
}
export const commonService = {
    currencyFormat
}