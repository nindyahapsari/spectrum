import { UseFormReturn } from 'react-hook-form';
import InputField from '../common/InputField';
import { UserBillInfo } from '../../types';

interface BillingInfoProps {
  formMethods: UseFormReturn<UserBillInfo>;
}

function BillingInfo({ formMethods }: BillingInfoProps) {
  const {
    register,
    formState: { errors },
  } = formMethods;

  return (
    <div className="flex flex-col justify-center items-center w-screen">
      <div className="card w-3/6 px-5 rounded-md text-neutral-content">
        <div className="card-body w-full text-black items-center text-center">
          <h2 className="card-title my-3 text-lg text-black font-semibold">
            Billing Info
          </h2>
          <div className="w-full py-10">
            <InputField<UserBillInfo>
              label="First Name"
              name="firstName"
              register={register}
              error={errors.firstName?.message}
            />
            <InputField<UserBillInfo>
              label="Last Name"
              name="lastName"
              register={register}
              error={errors.lastName?.message}
            />
            <InputField<UserBillInfo>
              label="Email"
              name="email"
              register={register}
              error={errors.email?.message}
            />
            <InputField<UserBillInfo>
              label="User Name"
              name="userName"
              register={register}
              error={errors.userName?.message}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BillingInfo;
