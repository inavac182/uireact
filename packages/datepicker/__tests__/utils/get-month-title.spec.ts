import { UiDatepickerLocalizedLabels } from '../../src/types';
import { getLocalizedMonthLabel } from '../../src/utils';

const labels: UiDatepickerLocalizedLabels = {
  months: {
    january: "Enero",
    february: "Febrero",
    march: "Marzo",
    april: "Abril",
    may: "Mayo",
    june: "Junio",
    july: "Julio",
    august: "Agosto",
    september: "Septiembre",
    october: "Octubre",
    november: "Noviembre",
    december: "Diciembre"
  },
  weekDays: {
    sunday: "Domingo",
    monday: "Lunes",
    tuesday: "Martes",
    wednesday: "Miercoles",
    thursday: "Jueves",
    friday: "Viernes",
    saturday: "Sabado"
  }
};

describe('getLocalizedMonthLabel()', () => {
  it('Should bring correct label based on the week day index', () => {
    const january = getLocalizedMonthLabel(0, labels);
    expect(january).toBe(labels.months.january);

    const february = getLocalizedMonthLabel(1, labels);
    expect(february).toBe(labels.months.february);

    const march = getLocalizedMonthLabel(2, labels);
    expect(march).toBe(labels.months.march);

    const april = getLocalizedMonthLabel(3, labels);
    expect(april).toBe(labels.months.april);

    const may = getLocalizedMonthLabel(4, labels);
    expect(may).toBe(labels.months.may);

    const june = getLocalizedMonthLabel(5, labels);
    expect(june).toBe(labels.months.june);

    const july = getLocalizedMonthLabel(6, labels);
    expect(july).toBe(labels.months.july);

    const august = getLocalizedMonthLabel(7, labels);
    expect(august).toBe(labels.months.august);

    const september = getLocalizedMonthLabel(8, labels);
    expect(september).toBe(labels.months.september);

    const october = getLocalizedMonthLabel(9, labels);
    expect(october).toBe(labels.months.october);

    const november = getLocalizedMonthLabel(10, labels);
    expect(november).toBe(labels.months.november);

    const december = getLocalizedMonthLabel(11, labels);
    expect(december).toBe(labels.months.december);
  });

  it('Should be empty on unknown index', () => {
    const saturday = getLocalizedMonthLabel(9999, labels);
    expect(saturday).toBe('');
  });
})