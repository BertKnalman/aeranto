export interface Flight {
  airline: string;
  flight: string;
  from: string;
  to: string;
  depart: string;
  arrive: string;
  duration: string;
  stops: 0 | 1;
  basePrice: number;
}

/**
 * Demo-Flugdaten — realistische Verbindungen ab deutschen Drehkreuze.
 * Preise = Economy-Basispreis pro Person, inkl. Steuern & Gebühren.
 */
export const flights: Flight[] = [
  { airline: 'Lufthansa', flight: 'LH2058', from: 'HAM', to: 'FRA', depart: '06:30', arrive: '07:40', duration: '1h 10m', stops: 0, basePrice: 129 },
  { airline: 'Lufthansa', flight: 'LH2060', from: 'HAM', to: 'FRA', depart: '08:15', arrive: '09:25', duration: '1h 10m', stops: 0, basePrice: 149 },
  { airline: 'Lufthansa', flight: 'LH2064', from: 'HAM', to: 'FRA', depart: '13:20', arrive: '14:30', duration: '1h 10m', stops: 0, basePrice: 139 },
  { airline: 'Lufthansa', flight: 'LH2070', from: 'HAM', to: 'FRA', depart: '18:45', arrive: '19:55', duration: '1h 10m', stops: 0, basePrice: 159 },
  { airline: 'Lufthansa', flight: 'LH2090', from: 'HAM', to: 'MUC', depart: '07:00', arrive: '08:20', duration: '1h 20m', stops: 0, basePrice: 139 },
  { airline: 'Lufthansa', flight: 'LH2094', from: 'HAM', to: 'MUC', depart: '11:10', arrive: '12:30', duration: '1h 20m', stops: 0, basePrice: 149 },
  { airline: 'Lufthansa', flight: 'LH2098', from: 'HAM', to: 'MUC', depart: '17:30', arrive: '18:50', duration: '1h 20m', stops: 0, basePrice: 165 },
  { airline: 'Eurowings', flight: 'EW7140', from: 'HAM', to: 'BER', depart: '09:05', arrive: '10:10', duration: '1h 05m', stops: 0, basePrice: 79 },
  { airline: 'Eurowings', flight: 'EW7144', from: 'HAM', to: 'BER', depart: '15:40', arrive: '16:45', duration: '1h 05m', stops: 0, basePrice: 89 },
  { airline: 'Eurowings', flight: 'EW7530', from: 'HAM', to: 'DUS', depart: '07:25', arrive: '08:25', duration: '1h 00m', stops: 0, basePrice: 69 },
  { airline: 'Eurowings', flight: 'EW7534', from: 'HAM', to: 'DUS', depart: '19:10', arrive: '20:10', duration: '1h 00m', stops: 0, basePrice: 85 },
  { airline: 'Lufthansa', flight: 'LH2160', from: 'HAM', to: 'STR', depart: '10:30', arrive: '11:45', duration: '1h 15m', stops: 0, basePrice: 119 },
  { airline: 'Eurowings', flight: 'EW8010', from: 'HAM', to: 'CGN', depart: '12:15', arrive: '13:20', duration: '1h 05m', stops: 0, basePrice: 75 },
  { airline: 'Eurowings', flight: 'EW9000', from: 'HAM', to: 'VIE', depart: '07:50', arrive: '09:25', duration: '1h 35m', stops: 0, basePrice: 99 },
  { airline: 'Austrian', flight: 'OS174', from: 'HAM', to: 'VIE', depart: '14:35', arrive: '16:10', duration: '1h 35m', stops: 0, basePrice: 129 },
  { airline: 'Austrian', flight: 'OS178', from: 'HAM', to: 'VIE', depart: '19:20', arrive: '20:55', duration: '1h 35m', stops: 0, basePrice: 139 },
  { airline: 'Eurowings', flight: 'EW7840', from: 'HAM', to: 'ZRH', depart: '08:40', arrive: '10:10', duration: '1h 30m', stops: 0, basePrice: 109 },
  { airline: 'Swiss', flight: 'LX1057', from: 'HAM', to: 'ZRH', depart: '13:05', arrive: '14:35', duration: '1h 30m', stops: 0, basePrice: 149 },
  { airline: 'Lufthansa', flight: 'LH2250', from: 'HAM', to: 'CDG', depart: '07:10', arrive: '08:55', duration: '1h 45m', stops: 0, basePrice: 119 },
  { airline: 'Air France', flight: 'AF1241', from: 'HAM', to: 'CDG', depart: '12:55', arrive: '14:40', duration: '1h 45m', stops: 0, basePrice: 134 },
  { airline: 'Air France', flight: 'AF1243', from: 'HAM', to: 'CDG', depart: '18:20', arrive: '20:05', duration: '1h 45m', stops: 0, basePrice: 129 },
  { airline: 'Lufthansa', flight: 'LH2370', from: 'HAM', to: 'LHR', depart: '09:30', arrive: '10:20', duration: '1h 50m', stops: 0, basePrice: 139 },
  { airline: 'British Airways', flight: 'BA967', from: 'HAM', to: 'LHR', depart: '15:10', arrive: '16:00', duration: '1h 50m', stops: 0, basePrice: 129 },
  { airline: 'KLM', flight: 'KL1774', from: 'HAM', to: 'AMS', depart: '06:55', arrive: '08:05', duration: '1h 10m', stops: 0, basePrice: 119 },
  { airline: 'KLM', flight: 'KL1778', from: 'HAM', to: 'AMS', depart: '14:20', arrive: '15:30', duration: '1h 10m', stops: 0, basePrice: 135 },
  { airline: 'Brussels Airlines', flight: 'SN2624', from: 'HAM', to: 'BRU', depart: '11:40', arrive: '12:55', duration: '1h 15m', stops: 0, basePrice: 109 },
  { airline: 'Eurowings', flight: 'EW7600', from: 'HAM', to: 'PRG', depart: '08:55', arrive: '10:15', duration: '1h 20m', stops: 0, basePrice: 89 },
  { airline: 'Eurowings', flight: 'EW9770', from: 'HAM', to: 'CPH', depart: '10:05', arrive: '11:00', duration: '0h 55m', stops: 0, basePrice: 95 },
  { airline: 'SAS', flight: 'SK650', from: 'HAM', to: 'CPH', depart: '16:30', arrive: '17:25', duration: '0h 55m', stops: 0, basePrice: 125 },
  { airline: 'SAS', flight: 'SK640', from: 'HAM', to: 'ARN', depart: '12:50', arrive: '14:15', duration: '1h 25m', stops: 0, basePrice: 139 },
  { airline: 'Norwegian', flight: 'DY1122', from: 'HAM', to: 'OSL', depart: '09:15', arrive: '10:40', duration: '1h 25m', stops: 0, basePrice: 109 },
  { airline: 'Finnair', flight: 'AY1424', from: 'HAM', to: 'HEL', depart: '11:25', arrive: '14:00', duration: '1h 35m', stops: 0, basePrice: 149 },
  { airline: 'Eurowings', flight: 'EW7880', from: 'HAM', to: 'FCO', depart: '07:35', arrive: '09:45', duration: '2h 10m', stops: 0, basePrice: 129 },
  { airline: 'ITA Airways', flight: 'AZ429', from: 'HAM', to: 'FCO', depart: '13:40', arrive: '15:50', duration: '2h 10m', stops: 0, basePrice: 159 },
  { airline: 'Eurowings', flight: 'EW7890', from: 'HAM', to: 'MXP', depart: '16:20', arrive: '18:15', duration: '1h 55m', stops: 0, basePrice: 119 },
  { airline: 'Eurowings', flight: 'EW7560', from: 'HAM', to: 'MAD', depart: '08:30', arrive: '11:25', duration: '2h 55m', stops: 0, basePrice: 139 },
  { airline: 'Iberia', flight: 'IB3269', from: 'HAM', to: 'MAD', depart: '14:50', arrive: '17:45', duration: '2h 55m', stops: 0, basePrice: 155 },
  { airline: 'Vueling', flight: 'VY1822', from: 'HAM', to: 'BCN', depart: '10:45', arrive: '13:20', duration: '2h 35m', stops: 0, basePrice: 119 },
  { airline: 'Vueling', flight: 'VY1824', from: 'HAM', to: 'BCN', depart: '19:35', arrive: '22:10', duration: '2h 35m', stops: 0, basePrice: 99 },
  { airline: 'Eurowings', flight: 'EW9600', from: 'HAM', to: 'PMI', depart: '06:15', arrive: '08:45', duration: '2h 30m', stops: 0, basePrice: 109 },
  { airline: 'Eurowings', flight: 'EW9604', from: 'HAM', to: 'PMI', depart: '12:30', arrive: '15:00', duration: '2h 30m', stops: 0, basePrice: 129 },
  { airline: 'Ryanair', flight: 'FR2126', from: 'HAM', to: 'PMI', depart: '17:05', arrive: '19:35', duration: '2h 30m', stops: 0, basePrice: 79 },
  { airline: 'Ryanair', flight: 'FR4589', from: 'HAM', to: 'AGP', depart: '08:10', arrive: '11:35', duration: '3h 25m', stops: 0, basePrice: 89 },
  { airline: 'TAP Portugal', flight: 'TP567', from: 'HAM', to: 'LIS', depart: '12:05', arrive: '14:30', duration: '3h 25m', stops: 0, basePrice: 149 },
  { airline: 'Turkish Airlines', flight: 'TK1664', from: 'HAM', to: 'IST', depart: '10:55', arrive: '15:10', duration: '3h 15m', stops: 0, basePrice: 219 },
  { airline: 'Turkish Airlines', flight: 'TK1666', from: 'HAM', to: 'IST', depart: '17:45', arrive: '22:00', duration: '3h 15m', stops: 0, basePrice: 199 },
  { airline: 'Emirates', flight: 'EK062', from: 'HAM', to: 'DXB', depart: '14:55', arrive: '23:45', duration: '6h 20m', stops: 0, basePrice: 549 },
  { airline: 'Emirates', flight: 'EK060', from: 'HAM', to: 'DXB', depart: '21:35', arrive: '06:25+1', duration: '6h 20m', stops: 0, basePrice: 519 },
  { airline: 'Qatar Airways', flight: 'QR090', from: 'HAM', to: 'DOH', depart: '11:20', arrive: '18:40', duration: '6h 20m', stops: 0, basePrice: 579 },
  { airline: 'Lufthansa', flight: 'LH036', from: 'HAM', to: 'JFK', depart: '11:45', arrive: '14:30', duration: '8h 15m', stops: 0, basePrice: 649 },
  { airline: 'United', flight: 'UA089', from: 'HAM', to: 'EWR', depart: '09:20', arrive: '12:05', duration: '8h 45m', stops: 0, basePrice: 619 },
  { airline: 'Lufthansa', flight: 'LH402', from: 'FRA', to: 'JFK', depart: '13:10', arrive: '16:00', duration: '8h 20m', stops: 0, basePrice: 689 },
  { airline: 'Lufthansa', flight: 'LH404', from: 'FRA', to: 'JFK', depart: '17:20', arrive: '20:10', duration: '8h 20m', stops: 0, basePrice: 659 },
  { airline: 'Delta', flight: 'DL107', from: 'FRA', to: 'JFK', depart: '10:15', arrive: '13:05', duration: '8h 20m', stops: 0, basePrice: 599 },
  { airline: 'Singapore Airlines', flight: 'SQ325', from: 'FRA', to: 'SIN', depart: '21:50', arrive: '16:45+1', duration: '12h 25m', stops: 0, basePrice: 849 },
  { airline: 'Emirates', flight: 'EK045', from: 'FRA', to: 'DXB', depart: '15:30', arrive: '00:10+1', duration: '6h 10m', stops: 0, basePrice: 489 },
  { airline: 'Lufthansa', flight: 'LH772', from: 'FRA', to: 'BKK', depart: '22:35', arrive: '15:20+1', duration: '10h 45m', stops: 0, basePrice: 799 },
  { airline: 'Lufthansa', flight: 'LH434', from: 'FRA', to: 'ORD', depart: '11:05', arrive: '13:40', duration: '9h 35m', stops: 0, basePrice: 729 },
  { airline: 'Lufthansa', flight: 'LH454', from: 'FRA', to: 'SFO', depart: '10:20', arrive: '13:05', duration: '11h 45m', stops: 0, basePrice: 799 },
  { airline: 'Lufthansa', flight: 'LH458', from: 'FRA', to: 'LAX', depart: '13:45', arrive: '16:30', duration: '11h 45m', stops: 0, basePrice: 779 },
  { airline: 'Air France', flight: 'AF1510', from: 'FRA', to: 'CDG', depart: '07:20', arrive: '08:45', duration: '1h 25m', stops: 0, basePrice: 129 },
  { airline: 'British Airways', flight: 'BA903', from: 'FRA', to: 'LHR', depart: '11:30', arrive: '12:15', duration: '1h 45m', stops: 0, basePrice: 139 },
  { airline: 'KLM', flight: 'KL1766', from: 'FRA', to: 'AMS', depart: '09:40', arrive: '10:55', duration: '1h 15m', stops: 0, basePrice: 135 },
  { airline: 'Iberia', flight: 'IB3133', from: 'FRA', to: 'MAD', depart: '12:25', arrive: '15:10', duration: '2h 45m', stops: 0, basePrice: 149 },
  { airline: 'Lufthansa', flight: 'LH1188', from: 'FRA', to: 'ZRH', depart: '08:15', arrive: '09:10', duration: '0h 55m', stops: 0, basePrice: 145 },
  { airline: 'Lufthansa', flight: 'LH1840', from: 'FRA', to: 'VIE', depart: '13:55', arrive: '15:25', duration: '1h 30m', stops: 0, basePrice: 159 },
  { airline: 'Lufthansa', flight: 'LH1780', from: 'FRA', to: 'LIS', depart: '10:40', arrive: '12:55', duration: '3h 15m', stops: 0, basePrice: 169 },
  { airline: 'Turkish Airlines', flight: 'TK1592', from: 'FRA', to: 'IST', depart: '14:35', arrive: '18:55', duration: '3h 20m', stops: 0, basePrice: 209 },
  { airline: 'Lufthansa', flight: 'LH1194', from: 'FRA', to: 'PRG', depart: '16:45', arrive: '17:55', duration: '1h 10m', stops: 0, basePrice: 135 },
  { airline: 'Lufthansa', flight: 'LH1226', from: 'FRA', to: 'GVA', depart: '09:05', arrive: '10:15', duration: '1h 10m', stops: 0, basePrice: 139 },
  { airline: 'Lufthansa', flight: 'LH1100', from: 'FRA', to: 'CDG', depart: '18:30', arrive: '19:55', duration: '1h 25m', stops: 0, basePrice: 149 },
  { airline: 'Lufthansa', flight: 'LH721', from: 'FRA', to: 'PEK', depart: '13:25', arrive: '05:35+1', duration: '10h 10m', stops: 0, basePrice: 829 },
  { airline: 'Lufthansa', flight: 'LH716', from: 'FRA', to: 'HND', depart: '11:40', arrive: '06:20+1', duration: '12h 40m', stops: 0, basePrice: 899 },
  { airline: 'Lufthansa', flight: 'LH508', from: 'FRA', to: 'GRU', depart: '22:10', arrive: '06:05+1', duration: '11h 55m', stops: 0, basePrice: 859 },
  { airline: 'Lufthansa', flight: 'LH2077', from: 'MUC', to: 'HAM', depart: '19:45', arrive: '21:05', duration: '1h 20m', stops: 0, basePrice: 135 },
  { airline: 'Lufthansa', flight: 'LH1692', from: 'MUC', to: 'CDG', depart: '08:50', arrive: '10:30', duration: '1h 40m', stops: 0, basePrice: 139 },
  { airline: 'Lufthansa', flight: 'LH1810', from: 'MUC', to: 'BCN', depart: '12:20', arrive: '14:30', duration: '2h 10m', stops: 0, basePrice: 145 },
  { airline: 'Lufthansa', flight: 'LH1936', from: 'MUC', to: 'BER', depart: '07:35', arrive: '08:50', duration: '1h 15m', stops: 0, basePrice: 99 },
  { airline: 'Emirates', flight: 'EK050', from: 'MUC', to: 'DXB', depart: '22:20', arrive: '06:55+1', duration: '6h 35m', stops: 0, basePrice: 529 },
  { airline: 'Lufthansa', flight: 'LH714', from: 'MUC', to: 'HND', depart: '15:20', arrive: '09:35+1', duration: '12h 15m', stops: 0, basePrice: 879 },
  { airline: 'Eurowings', flight: 'EW9081', from: 'DUS', to: 'MUC', depart: '06:40', arrive: '07:55', duration: '1h 15m', stops: 0, basePrice: 79 },
  { airline: 'Eurowings', flight: 'EW9440', from: 'DUS', to: 'BCN', depart: '09:55', arrive: '12:20', duration: '2h 25m', stops: 0, basePrice: 109 },
  { airline: 'Eurowings', flight: 'EW9640', from: 'DUS', to: 'LIS', depart: '13:15', arrive: '15:35', duration: '3h 20m', stops: 0, basePrice: 139 },
  { airline: 'Eurowings', flight: 'EW9584', from: 'DUS', to: 'PMI', depart: '07:00', arrive: '09:30', duration: '2h 30m', stops: 0, basePrice: 95 },
  { airline: 'Eurowings', flight: 'EW1112', from: 'BER', to: 'MAD', depart: '10:15', arrive: '13:20', duration: '3h 05m', stops: 0, basePrice: 119 },
  { airline: 'Ryanair', flight: 'FR2365', from: 'BER', to: 'STN', depart: '16:50', arrive: '17:35', duration: '1h 45m', stops: 0, basePrice: 65 },
  { airline: 'easyJet', flight: 'U25521', from: 'BER', to: 'AMS', depart: '08:25', arrive: '09:55', duration: '1h 30m', stops: 0, basePrice: 75 },
  { airline: 'Lufthansa', flight: 'LH151', from: 'STR', to: 'FRA', depart: '06:50', arrive: '07:40', duration: '0h 50m', stops: 0, basePrice: 105 },
  { airline: 'Eurowings', flight: 'EW2160', from: 'STR', to: 'BER', depart: '11:55', arrive: '13:10', duration: '1h 15m', stops: 0, basePrice: 89 },
  { airline: 'Lufthansa', flight: 'LH301', from: 'HAM', to: 'GVA', depart: '08:05', arrive: '09:40', duration: '1h 35m', stops: 1, basePrice: 189 },
  { airline: 'Lufthansa', flight: 'LH315', from: 'HAM', to: 'NCE', depart: '10:20', arrive: '14:15', duration: '3h 55m', stops: 1, basePrice: 219 },
  { airline: 'Air France', flight: 'AF1850', from: 'HAM', to: 'BKK', depart: '12:40', arrive: '06:30+1', duration: '13h 50m', stops: 1, basePrice: 729 },
  { airline: 'KLM', flight: 'KL1781', from: 'HAM', to: 'SIN', depart: '14:10', arrive: '10:55+1', duration: '15h 45m', stops: 1, basePrice: 769 },
  { airline: 'Turkish Airlines', flight: 'TK1668', from: 'HAM', to: 'NRT', depart: '18:30', arrive: '17:45+1', duration: '17h 15m', stops: 1, basePrice: 849 },
  { airline: 'Lufthansa', flight: 'LH011', from: 'HAM', to: 'LAX', depart: '09:55', arrive: '15:40', duration: '12h 45m', stops: 1, basePrice: 699 },
  { airline: 'British Airways', flight: 'BA969', from: 'HAM', to: 'MIA', depart: '11:30', arrive: '19:05', duration: '13h 35m', stops: 1, basePrice: 749 },
  { airline: 'Swiss', flight: 'LX1053', from: 'HAM', to: 'CPT', depart: '20:15', arrive: '13:10+1', duration: '16h 55m', stops: 1, basePrice: 899 },
  { airline: 'KLM', flight: 'KL1776', from: 'HAM', to: 'EWR', depart: '08:05', arrive: '13:35', duration: '10h 30m', stops: 1, basePrice: 589 },
  { airline: 'SAS', flight: 'SK651', from: 'HAM', to: 'KEF', depart: '13:45', arrive: '18:05', duration: '5h 20m', stops: 1, basePrice: 329 },
  { airline: 'Lufthansa', flight: 'LH023', from: 'HAM', to: 'ATH', depart: '09:40', arrive: '15:20', duration: '4h 40m', stops: 1, basePrice: 239 },
  { airline: 'Lufthansa', flight: 'LH131', from: 'HAM', to: 'NAP', depart: '07:15', arrive: '11:35', duration: '4h 20m', stops: 1, basePrice: 189 },
  { airline: 'Austrian', flight: 'OS172', from: 'HAM', to: 'DBV', depart: '12:35', arrive: '17:25', duration: '4h 50m', stops: 1, basePrice: 269 },
  { airline: 'Swiss', flight: 'LX1059', from: 'HAM', to: 'MLA', depart: '10:50', arrive: '15:45', duration: '4h 55m', stops: 1, basePrice: 259 },
  { airline: 'Brussels Airlines', flight: 'SN2626', from: 'HAM', to: 'ALC', depart: '06:20', arrive: '12:30', duration: '6h 10m', stops: 1, basePrice: 229 },
  { airline: 'Lufthansa', flight: 'LH409', from: 'HAM', to: 'EZE', depart: '22:05', arrive: '08:45+1', duration: '16h 40m', stops: 1, basePrice: 899 },
  { airline: 'Air France', flight: 'AF1247', from: 'HAM', to: 'CUN', depart: '10:10', arrive: '18:55', duration: '14h 45m', stops: 1, basePrice: 819 },
  { airline: 'KLM', flight: 'KL1783', from: 'HAM', to: 'SJO', depart: '08:45', arrive: '19:20', duration: '16h 35m', stops: 1, basePrice: 869 },
  { airline: 'Lufthansa', flight: 'LH761', from: 'FRA', to: 'DEL', depart: '12:55', arrive: '01:10+1', duration: '8h 15m', stops: 0, basePrice: 619 },
  { airline: 'Lufthansa', flight: 'LH796', from: 'FRA', to: 'HKG', depart: '22:00', arrive: '16:35+1', duration: '12h 35m', stops: 0, basePrice: 849 },
  { airline: 'Lufthansa', flight: 'LH543', from: 'FRA', to: 'MEX', depart: '10:35', arrive: '16:15', duration: '12h 40m', stops: 0, basePrice: 829 },
  { airline: 'Lufthansa', flight: 'LH480', from: 'MUC', to: 'ORD', depart: '12:35', arrive: '15:10', duration: '9h 35m', stops: 0, basePrice: 749 },
  { airline: 'Emirates', flight: 'EK048', from: 'MUC', to: 'DXB', depart: '13:45', arrive: '22:20', duration: '6h 35m', stops: 0, basePrice: 509 },
  { airline: 'Qatar Airways', flight: 'QR060', from: 'MUC', to: 'DOH', depart: '16:15', arrive: '23:35', duration: '6h 20m', stops: 0, basePrice: 559 },
  { airline: 'Lufthansa', flight: 'LH1230', from: 'FRA', to: 'NCE', depart: '14:20', arrive: '15:50', duration: '1h 30m', stops: 0, basePrice: 129 },
  { airline: 'Lufthansa', flight: 'LH1298', from: 'FRA', to: 'IST', depart: '11:25', arrive: '16:45', duration: '3h 20m', stops: 0, basePrice: 189 },
  { airline: 'Lufthansa', flight: 'LH1338', from: 'FRA', to: 'BUD', depart: '16:05', arrive: '17:30', duration: '1h 25m', stops: 0, basePrice: 145 },
  { airline: 'Lufthansa', flight: 'LH1396', from: 'FRA', to: 'PRG', depart: '21:15', arrive: '22:25', duration: '1h 10m', stops: 0, basePrice: 125 },
  { airline: 'Lufthansa', flight: 'LH1600', from: 'FRA', to: 'WAW', depart: '12:55', arrive: '14:30', duration: '1h 35m', stops: 0, basePrice: 139 },
  { airline: 'LOT Polish', flight: 'LO382', from: 'FRA', to: 'WAW', depart: '19:40', arrive: '21:15', duration: '1h 35m', stops: 0, basePrice: 119 },
  { airline: 'SAS', flight: 'SK1638', from: 'FRA', to: 'CPH', depart: '10:30', arrive: '11:50', duration: '1h 20m', stops: 0, basePrice: 135 },
  { airline: 'Finnair', flight: 'AY1412', from: 'FRA', to: 'HEL', depart: '13:10', arrive: '16:35', duration: '2h 25m', stops: 0, basePrice: 159 },
  { airline: 'Iberia', flight: 'IB3131', from: 'FRA', to: 'MAD', depart: '19:05', arrive: '21:50', duration: '2h 45m', stops: 0, basePrice: 139 },
  { airline: 'Aegean', flight: 'A3501', from: 'HAM', to: 'ATH', depart: '11:45', arrive: '15:35', duration: '2h 50m', stops: 0, basePrice: 249 },
  { airline: 'LOT Polish', flight: 'LO402', from: 'HAM', to: 'WAW', depart: '12:10', arrive: '13:35', duration: '1h 25m', stops: 0, basePrice: 169 },
  { airline: 'Czech Airlines', flight: 'OK771', from: 'HAM', to: 'PRG', depart: '14:25', arrive: '15:40', duration: '1h 15m', stops: 0, basePrice: 149 },
  { airline: 'Lufthansa', flight: 'LH410', from: 'MUC', to: 'JFK', depart: '12:10', arrive: '15:35', duration: '8h 25m', stops: 0, basePrice: 659 },
  { airline: 'Emirates', flight: 'EK052', from: 'BER', to: 'DXB', depart: '15:40', arrive: '00:20+1', duration: '6h 40m', stops: 0, basePrice: 539 },
  { airline: 'Condor', flight: 'DE2201', from: 'DUS', to: 'DXB', depart: '13:55', arrive: '23:45', duration: '6h 50m', stops: 0, basePrice: 469 },
  { airline: 'Lufthansa', flight: 'LH716', from: 'FRA', to: 'BKK', depart: '22:05', arrive: '14:50+1', duration: '10h 45m', stops: 0, basePrice: 749 },
  { airline: 'Singapore Airlines', flight: 'SQ331', from: 'MUC', to: 'SIN', depart: '12:35', arrive: '07:10+1', duration: '12h 35m', stops: 0, basePrice: 829 },
  { airline: 'Lufthansa', flight: 'LH760', from: 'FRA', to: 'DEL', depart: '13:10', arrive: '00:45+1', duration: '7h 35m', stops: 0, basePrice: 589 },
  { airline: 'KLM', flight: 'KL601', from: 'AMS', to: 'LAX', depart: '10:20', arrive: '12:35', duration: '11h 15m', stops: 0, basePrice: 689 },
  { airline: 'Air France', flight: 'AF066', from: 'CDG', to: 'LAX', depart: '10:10', arrive: '12:50', duration: '11h 40m', stops: 0, basePrice: 719 },
  { airline: 'British Airways', flight: 'BA249', from: 'LHR', to: 'JFK', depart: '13:05', arrive: '16:25', duration: '8h 20m', stops: 0, basePrice: 549 },
  { airline: 'Lufthansa', flight: 'LH572', from: 'FRA', to: 'CPT', depart: '22:20', arrive: '11:05+1', duration: '11h 45m', stops: 0, basePrice: 899 },
  { airline: 'Turkish Airlines', flight: 'TK1761', from: 'IST', to: 'BKK', depart: '19:30', arrive: '08:15+1', duration: '9h 45m', stops: 0, basePrice: 599 },
  { airline: 'Eurowings', flight: 'EW9614', from: 'DUS', to: 'PMI', depart: '06:25', arrive: '08:55', duration: '2h 30m', stops: 0, basePrice: 99 },
  { airline: 'Ryanair', flight: 'FR2148', from: 'CGN', to: 'PMI', depart: '09:15', arrive: '11:45', duration: '2h 30m', stops: 0, basePrice: 69 },
  { airline: 'Lufthansa', flight: 'LH1150', from: 'STR', to: 'PMI', depart: '13:40', arrive: '15:55', duration: '2h 15m', stops: 0, basePrice: 189 },
];

/** "8h 30m" -> Minuten (für Sortierung) */
export function durationToMinutes(duration: string): number {
  const m = duration.match(/(\d+)h/)?.[1];
  const s = duration.match(/(\d+)m/)?.[1];
  return (m ? parseInt(m, 10) * 60 : 0) + (s ? parseInt(s, 10) : 0);
}

/** "06:30" -> Minuten seit Mitternacht (für Tageszeit-Filter) */
export function timeToMinutes(time: string): number {
  const [h, m] = time.split(':').map((x) => parseInt(x, 10));
  return h * 60 + (m || 0);
}

export function findFlights(from: string, to: string): Flight[] {
  const f = from.toUpperCase();
  const t = to.toUpperCase();
  return flights.filter((fl) => fl.from === f && fl.to === t);
}
