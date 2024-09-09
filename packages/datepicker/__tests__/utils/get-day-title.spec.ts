import { UiDatepickerLocalizedLabels } from '../../src/types';
import { getLocalizedWeekLabel } from '../../src/utils';

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

describe('getLocalizedWeekLabel()', () => {
  it('Should bring correct label based on the week day index', () => {
    const sunday = getLocalizedWeekLabel(0, labels);
    expect(sunday).toBe(labels.weekDays.sunday);

    const monday = getLocalizedWeekLabel(1, labels);
    expect(monday).toBe(labels.weekDays.monday);

    const tuesday = getLocalizedWeekLabel(2, labels);
    expect(tuesday).toBe(labels.weekDays.tuesday);

    const wednesday = getLocalizedWeekLabel(3, labels);
    expect(wednesday).toBe(labels.weekDays.wednesday);

    const thursday = getLocalizedWeekLabel(4, labels);
    expect(thursday).toBe(labels.weekDays.thursday);

    const friday = getLocalizedWeekLabel(5, labels);
    expect(friday).toBe(labels.weekDays.friday);

    const saturday = getLocalizedWeekLabel(6, labels);
    expect(saturday).toBe(labels.weekDays.saturday);
  });

  it('Should be empty on unknown index', () => {
    const saturday = getLocalizedWeekLabel(9999, labels);
    expect(saturday).toBe('');
  });
})