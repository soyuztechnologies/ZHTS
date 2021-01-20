sap.ui.define(["sap/ui/core/format/DateFormat",
		"sap/ui/core/format/NumberFormat"
	],
	function(DateFormat, NumberFormat) {

		return {

			dateFormatter: function(date) {

				var oFormat = DateFormat.getInstance({
					format: "YYYYMMDD"
				});

				return oFormat.format(date);
			},
			formatDecimal: function(num) {
				if (num) {
					return (Math.round(num * 100) / 100).toFixed(2);
				}
			},
			formatPercentage: function(num) {
				return Boolean(num) ? (parseFloat(num)).toFixed(2) : 0;
			},
			formatLineTotal: function(num) {
				return parseFloat(num).toFixed(2);
			},
			fomatBoeStatus: function(val) {
				var status = {
					"P": "Pagato",
					"S": "Inviato",
					"D": "Presentato",
					"G": "Generato",
					"2509": "Annullato",
					"L": "Chiuso",
					"F": "Operazione non riuscita",
					"V": "Da Fornitore",
					"I": "In Ingresso",
					"O": "In Uscita",
					"X": "Effetto non trovato in SAP"
				};
				return status[val] ? status[val] : "";
			},
			formatBoeSum: function(num) {
				var oCurrencyFormat = NumberFormat.getCurrencyInstance({
					currencyCode: false
				});
				return Boolean(num) ? oCurrencyFormat.format(num) : 0;
			}

		};
	}
);