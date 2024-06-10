import { UseFormReturn } from 'react-hook-form';

interface BillingInfoProps {
  formMethods: UseFormReturn;
}

function BillingInfo({ formMethods }: BillingInfoProps) {
  const { register } = formMethods;

  return (
    <div className="flex flex-col justify-center items-center w-screen">
      <div className="card w-3/6 px-5 rounded-md text-neutral-content">
        <div className="card-body w-full text-black items-center text-center">
          <h2 className="card-title my-3 text-lg text-black font-semibold">
            Billing Info
          </h2>
          <div className="w-full py-10">
            <div className="flex flex-col justify-center items-start">
              <label className=" my-3" htmlFor="firstName">
                First Name
              </label>
              <input
                className="w-full  input input-bordered rounded-md my-3 "
                {...register('firstName')}
              />
            </div>
            <div className="flex flex-col justify-center items-start">
              <label className="my-3" htmlFor="lastName">
                Last Name
              </label>
              <input
                className="w-full input input-bordered rounded-md flex items-center gap-2 "
                {...register('lastName')}
              />
            </div>
            <div className="flex flex-col justify-center items-start">
              <label className="my-3" htmlFor="email">
                Email
              </label>
              <input
                className="w-full input input-bordered rounded-md flex items-center gap-2 "
                {...register('email')}
              />
            </div>
            <div className="flex flex-col justify-center items-start">
              <label className="my-3" htmlFor="userName">
                User Name
              </label>
              <input
                className="w-full input input-bordered rounded-md flex items-center gap-2 "
                {...register('userName')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BillingInfo;
