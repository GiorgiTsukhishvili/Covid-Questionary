import { ArrowRight, ArrowRightDisabled } from '~/components';

import useNameAndEmailFormInputs from './useNameAndEmailFormInputs';

import { ErrorMessage } from '@hookform/error-message';

const NameAndEmailFormInputs = () => {
  const {
    register,
    handleSubmit,
    getValues,
    errors,
    isValid,
    onSubmit,
    changeNameAndEmailFormData,
  } = useNameAndEmailFormInputs();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
      <label
        htmlFor='first_name'
        className='font-bold leading-[27px] text-[22px] text-neutral-850 mb-[18px]'
      >
        სახელი*
      </label>
      <input
        type='text'
        {...register('first_name', {
          onChange: () => changeNameAndEmailFormData(getValues()),
          required: {
            value: true,
            message: 'ველი სავალდებულოა',
          },
          minLength: {
            value: 2,
            message: 'სახელის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან',
          },
          maxLength: {
            value: 250,
            message: 'სახელის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან',
          },
        })}
        className='border-[1px] bg-white-150 outline-none px-[20px] py-2.5 w-[513px] border-neutral-850 font-normal text-lg leading-[22px] h-[50px]'
        placeholder='სახელი'
      />
      <div className='font-normal text-base leading-[19px] h-[19px] text-orange-650 mt-[5px] ml-[15px]'>
        <ErrorMessage errors={errors} name='first_name' />
      </div>

      <label
        htmlFor='last_name'
        className='font-bold leading-[27px] text-[22px] text-neutral-850 mb-[18px] mt-[28px]'
      >
        გვარი*
      </label>
      <input
        type='text'
        {...register('last_name', {
          onChange: () => changeNameAndEmailFormData(getValues()),
          required: {
            value: true,
            message: 'ველი სავალდებულოა',
          },
          minLength: {
            value: 2,
            message: 'გვარის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან',
          },
          maxLength: {
            value: 250,
            message: 'გვარის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან',
          },
        })}
        placeholder='გვარი'
        className='border-[1px] bg-white-150 outline-none px-[20px] py-2.5 w-[513px] border-neutral-850 font-normal text-lg leading-[22px] h-[50px]'
      />
      <div className='font-normal text-base leading-[19px] h-[19px] text-orange-650 mt-[5px] ml-[15px]'>
        <ErrorMessage errors={errors} name='last_name' />
      </div>

      <label
        htmlFor='email'
        className='font-bold leading-[27px] text-[22px] text-neutral-850 mb-[18px] mt-[28px]'
      >
        მეილი*
      </label>
      <input
        type='text'
        {...register('email', {
          onChange: () => changeNameAndEmailFormData(getValues()),
          required: {
            value: true,
            message: 'ველი სავალდებულოა',
          },
          validate: {
            endsWith: (value) => {
              if (
                !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                  value
                )
              ) {
                return 'თქვენ მიერ შეყვანილი მეილი არასწორია';
              } else if (!value.endsWith('@redberry.ge')) {
                return 'გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)';
              }
            },
          },
        })}
        placeholder='მეილი'
        className='border-[1px] bg-white-150 outline-none px-[20px] py-2.5 w-[513px] border-neutral-850 font-normal text-lg leading-[22px] h-[50px]'
      />
      <div className='font-normal text-base leading-[19px] h-[19px] text-orange-650 mt-[5px] ml-[15px]'>
        <ErrorMessage errors={errors} name='email' />
      </div>

      <div className='w-[145px] flex justify-end absolute bottom-[25px] left-[50%] translate-x-[-50%]'>
        <button disabled={!isValid}>
          {isValid ? <ArrowRight /> : <ArrowRightDisabled />}
        </button>
      </div>
    </form>
  );
};

export default NameAndEmailFormInputs;
