import { Fragment } from 'react';
import { ErrorMessage } from '@hookform/error-message';
import { ArrowLeft, ArrowRight, ArrowRightDisabled } from '~/components/icons';
import { Link } from 'react-router-dom';
import { useCovidStateFormInputs } from '~/components/FormsInputs/FormInputsHooks';

const CovidStateFormInputs = () => {
  const {
    register,
    handleSubmit,
    errors,
    isValid,
    userAnswers,
    onSubmit,
    setValue,
  } = useCovidStateFormInputs();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
      <label
        htmlFor='had_covid'
        className='font-bold leading-[1.688rem] text-[1.375rem] text-neutral-850 mb-[1.125rem]'
      >
        გაქვს გადატანილი Covid-19?*
      </label>
      <div className='flex items-center mb-[1.25rem]'>
        <input
          type='radio'
          {...register('had_covid', {
            required: true,
            onChange: () => setValue('had_antibody_test', ''),
          })}
          id='yes'
          value={'yes'}
          className='mx-[1.188rem] radio-button'
        />
        <label
          htmlFor='yes'
          className='font-normal text-xl leading-6 text-neutral-850'
        >
          კი
        </label>
      </div>
      <div className='flex items-center mb-[1.25rem]'>
        <input
          type='radio'
          {...register('had_covid', {
            required: true,
            onChange: () => setValue('had_antibody_test', ''),
          })}
          value={'no'}
          id='no'
          className='mx-[1.188rem] radio-button'
        />
        <label
          htmlFor='no'
          className='font-normal text-xl leading-6 text-neutral-850'
        >
          არა
        </label>
      </div>
      <div className='flex items-center mb-[1.25rem]'>
        <input
          type='radio'
          {...register('had_covid', {
            required: true,
            onChange: () => setValue('had_antibody_test', ''),
          })}
          value={'have_right_now'}
          id='have_right_now'
          className='mx-[1.188rem] radio-button '
        />
        <label
          htmlFor='have_right_now'
          className='font-normal text-xl leading-6 text-neutral-850 '
        >
          ახლა მაქვს
        </label>
      </div>
      {userAnswers[0] === 'yes' && (
        <Fragment>
          <label
            htmlFor='had_antibody_test'
            className='font-bold leading-[1.688rem] text-[1.375rem] text-neutral-850 mb-[1.125rem] mt-[1.625rem]'
          >
            ანტისხეულების ტესტი გაქვს გაკეთებული?*
          </label>
          <div className='flex items-center mb-[1.25rem]'>
            <input
              type='radio'
              {...register('had_antibody_test', {
                required: true,
              })}
              id='had_antibody_test_yes'
              value={'true'}
              className='mx-[1.188rem] radio-button'
            />
            <label
              htmlFor='had_antibody_test_yes'
              className='font-normal text-xl leading-6 text-neutral-850'
            >
              კი
            </label>
          </div>
          <div className='flex items-center mb-[1.25rem]'>
            <input
              type='radio'
              {...register('had_antibody_test', { required: true })}
              value={'false'}
              id='had_antibody_test_no'
              className='mx-[1.188rem] radio-button'
            />
            <label
              htmlFor='had_antibody_test_no'
              className='font-normal text-xl leading-6 text-neutral-850'
            >
              არა
            </label>
          </div>
        </Fragment>
      )}
      {userAnswers[0] === 'yes' && userAnswers[1] === 'false' && (
        <Fragment>
          <label
            htmlFor='covid_sickness_date'
            className='font-bold leading-[1.688rem] text-[1.375rem] text-neutral-850 mb-[1.125rem] mt-[1.625rem] max-w-[35.625rem]'
          >
            მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*
          </label>
          <input
            type='text'
            {...register('covid_sickness_date', {
              required: {
                value: true,
                message: 'ველი სავალდებულოა',
              },
            })}
            onFocus={(e) => (e.target.type = 'date')}
            className='border-[1px] ml-[1.188rem] bg-white-150 outline-none px-[1.25rem] py-2.5 w-[513px] border-neutral-850 font-normal text-lg leading-[1.375rem] h-[50px]'
            placeholder='დდ/თთ/წწ'
          />
          <div className='font-normal text-base leading-[1.188rem] h-[1.188rem] text-orange-650 mt-[5px] ml-[15px]'>
            <ErrorMessage errors={errors} name='covid_sickness_date' />
          </div>
        </Fragment>
      )}

      {userAnswers[0] === 'yes' && userAnswers[1] === 'true' && (
        <Fragment>
          <label
            htmlFor='antibodies'
            className='font-bold leading-[1.688rem] text-[1.375rem] text-neutral-850 mb-[1.125rem] mt-[1.625rem] max-w-[35.625rem]'
          >
            თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების
            რაოდენობა*
          </label>
          <input
            type='text'
            {...register('antibodies.test_date', {
              required: {
                value: true,
                message: 'ველი სავალდებულოა',
              },
            })}
            onFocus={(e) => (e.target.type = 'date')}
            className='border-[1px] ml-[1.188rem] bg-white-150 outline-none px-[1.25rem] py-2.5 w-[513px] border-neutral-850 font-normal text-lg leading-[1.375rem] h-[50px]'
            placeholder='რიცხვი'
          />
          <div className='font-normal text-base leading-[1.188rem] h-[1.188rem] text-orange-650 mt-[5px] ml-[15px]'>
            <ErrorMessage errors={errors} name='antibodies.test_date' />
          </div>
          <input
            type='text'
            {...register('antibodies.number', {
              valueAsNumber: true,
              validate: {
                hasSpecialChar: (value) =>
                  /^[0-9]+$/.test(value!.toString()) || 'ველი სავალდებულოა',
              },
            })}
            className='border-[1px] ml-[1.188rem] mt-[25px] bg-white-150 outline-none px-[1.25rem] py-2.5 w-[513px] border-neutral-850 font-normal text-lg leading-[1.375rem] h-[50px]'
            placeholder='ანტისხეულების რაოდენობა'
          />
          <div className='font-normal text-base leading-[1.188rem] h-[1.188rem] text-orange-650 mt-[5px] ml-[15px]'>
            <ErrorMessage errors={errors} name='antibodies.number' />
          </div>
        </Fragment>
      )}

      <div className='w-[9rem] flex justify-between absolute bottom-[1.56rem] left-1/2 translate-x--1/2 z-[15]'>
        <Link to={'../form/name-and-email?starting-point=backward'}>
          <ArrowLeft />
        </Link>
        <button disabled={!isValid}>
          {isValid ? <ArrowRight /> : <ArrowRightDisabled />}
        </button>
      </div>
    </form>
  );
};

export default CovidStateFormInputs;
