import { Controller } from 'react-hook-form';

export function FlightTypes({ control, labels }) {
  return (
    <div className="my-5">
      {labels.map((label, i) => (
        <Controller
          key={i}
          name="flightType"
          control={control}
          render={({ field }) => (
            <label className="mx-2 inline-flex items-center">// ...</label>
          )}
        />
      ))}
    </div>
  );
}
