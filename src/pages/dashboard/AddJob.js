import { FormRow, FormRowSelect } from '../../components'
import Wrapper from '../../assets/wrappers/DashboardFormPage'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import {
  handleChange,
  clearValues,
  createJob,
  editJob,
} from '../../features/job/jobSlice'
import { useEffect } from 'react'
const AddJob = () => {
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job)
  const { user } = useSelector((store) => store.user)
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!position || !company || !jobLocation) {
      toast.error('Please fill out all fields')
      return
    }
    if (isEditing) {
      dispatch(
        editJob({
          jobId: editJobId,
          job: { position, company, jobLocation, jobType, status },
        })
      )
      return
    }
    dispatch(createJob({ position, company, jobLocation, jobType, status }))
  }

  const handleJobInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    dispatch(handleChange({ name, value }))
  }

  useEffect(() => {
    if (!isEditing) {
      dispatch(
        handleChange({
          name: 'jobLocation',
          value: user.location,
        })
      )
    }
  }, [])

  return (
    <Wrapper>
      <form className='form'>
        <h3>{isEditing ? 'Manage mentor' : 'add mentor'}</h3>
        <div className='form-center'>
          {/* position */}
          <FormRow
            type='text'
            labelText='Name'
            name='position'
            value={position}
            handleChange={handleJobInput}
          />
          {/* position */}
          <FormRow
            type='text'
            labelText='email'
            name='position'
            value={position}
            handleChange={handleJobInput}
          />
          {/* position */}
          <FormRow
            type='text'
            labelText='phone number'
            name='position'
            value={position}
            handleChange={handleJobInput}
          />
          {/* position */}
          <FormRow
            type='text'
            labelText='Skills'
            name='position'
            value={position}
            handleChange={handleJobInput}
          />
          {/* company */}
          <FormRow
            type='text'
            labelText='Experience'
            name='company'
            value={company}
            handleChange={handleJobInput}
          />
          {/* company */}
          <FormRow
            type='text'
            labelText='Goals'
            name='company'
            value={company}
            handleChange={handleJobInput}
          />
          {/* company */}
          <FormRow
            type='text'
            labelText='Gender'
            name='company'
            value={company}
            handleChange={handleJobInput}
          />
          {/* jobLocation */}
          <FormRow
            type='text'
            name='jobLocation'
            labelText='location/city/state'
            value={jobLocation}
            handleChange={handleJobInput}
          />
          {/* status */}
          <FormRowSelect
            name='status'
            value={status}
            handleChange={handleJobInput}
            list={statusOptions}
          />
          {/* job type*/}
          <FormRowSelect
            name='jobType'
            labelText='proximity'
            value={jobType}
            handleChange={handleJobInput}
            list={jobTypeOptions}
          />
          <div className='btn-container'>
            <button
              type='button'
              className='btn btn-block clear-btn'
              onClick={() => dispatch(clearValues())}
            >
              clear
            </button>
            <button
              type='submit'
              className='btn btn-block submit-btn'
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>
          </div>
        </div>
      </form>
      <br />
      <br />
      <form className='form'>
        <h3>{isEditing ? 'edit mentee' : 'add mentee'}</h3>
        <div className='form-center'>
          {/* position */}
          <FormRow
            type='text'
            labelText='Name'
            name='position'
            value={position}
            handleChange={handleJobInput}
          />
          {/* position */}
          <FormRow
            type='text'
            labelText='email'
            name='position'
            value={position}
            handleChange={handleJobInput}
          />
          {/* position */}
          <FormRow
            type='text'
            labelText='phone number'
            name='position'
            value={position}
            handleChange={handleJobInput}
          />
          {/* position */}
          <FormRow
            type='text'
            labelText='Skills'
            name='position'
            value={position}
            handleChange={handleJobInput}
          />
          {/* company */}
          {/* <FormRow
            type='text'
            labelText='Experience'
            name='company'
            value={company}
            handleChange={handleJobInput}
          /> */}
          {/* company */}
          {/* <FormRow
            type='text'
            labelText='Goals'
            name='company'
            value={company}
            handleChange={handleJobInput}
          /> */}
          {/* company */}
          {/* <FormRow
            type='text'
            labelText='Gender'
            name='company'
            value={company}
            handleChange={handleJobInput}
          /> */}
          {/* jobLocation */}
          <FormRow
            type='text'
            name='jobLocation'
            labelText='location/city/state'
            value={jobLocation}
            handleChange={handleJobInput}
          />
          {/* status */}
          {/* <FormRowSelect
            name='status'
            value={status}
            handleChange={handleJobInput}
            list={statusOptions}
          /> */}
          {/* job type*/}
          <FormRowSelect
            name='jobType'
            labelText='proximity'
            value={jobType}
            handleChange={handleJobInput}
            list={jobTypeOptions}
          />
          <div className='btn-container'>
            <button
              type='button'
              className='btn btn-block clear-btn'
              onClick={() => dispatch(clearValues())}
            >
              clear
            </button>
            <button
              type='submit'
              className='btn btn-block submit-btn'
              onClick={handleSubmit}
              disabled={isLoading}
            >
              update details
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  )
}
export default AddJob
