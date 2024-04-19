'use client'
import { classNames } from "@/utils/helpers"
import { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  firstname: string
  lastname: string
  email: string
  mobilenumber: number
  title: number
  developer: string
}

interface IPerson extends Inputs {
  id: number
}

function CardList({data, deleteData}:{
  data: IPerson[], 
  deleteData: (deletedIndex:number) => void
}) {
  return (
    <div className="flex flex-wrap gap-4 max-w-full">
      {data.map((d, dIndex) => (
        <div key={dIndex} className="min-w-[160px] bg-white border rounded shadow p-4">
          <div>{d.title} {d.firstname} {d.lastname}</div>
          <div>{d.email}</div>
          <div>{d.mobilenumber}</div>
          <button onClick={() => deleteData(d.id)} className="text-red-500">Delete</button>
        </div>
      ))}
    </div>
  )
}

export default function CardMaker() {
  const [personData, setPersonData] = useState<IPerson[]>([])
  const [dataCount, setDataCount] = useState<number>(0)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setPersonData([{
      id: dataCount,
      ...data
    }, ...personData])
    setDataCount(dataCount+1)
  }

  const deleteData = (deletedIndex:number) => {
    setPersonData(personData.filter(per => per.id !== deletedIndex))
  }

  return (
    <main className="w-full p-4 overflow-auto">
      <h1 className="text-xl mb-4">
        Card Maker
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-start">
        <div className="flex">
          <label htmlFor="firstname" className="w-[120px]">First name</label>
          <input 
            id="firstname"
            type="text" 
            placeholder="First name" 
            {...register("firstname", {required: true, maxLength: 80})} 
            className={errors.firstname ? "border border-red-500" : "border"}
          />
        </div>
        <div className="flex">
          <label htmlFor="lastname" className="w-[120px]">Last name</label>
          <input 
            id="lastname"
            type="text" 
            placeholder="Last name" 
            {...register("lastname", {required: true, maxLength: 100})} 
            className={errors.lastname ? "border border-red-500" : "border"}
          />
        </div>
        <div className="flex">
          <label htmlFor="email" className="w-[120px]">Email</label>
          <input 
            id="email"
            type="email" 
            placeholder="Email" 
            {...register("email", {required: true, pattern: /^\S+@\S+$/i})} 
            className={errors.email ? "border border-red-500" : "border"}
          />
        </div>
        <div className="flex">
          <label htmlFor="mobile" className="w-[120px]">Mobile number</label>
          <input 
            id="mobile"
            type="tel" 
            placeholder="Mobile number" 
            {...register("mobilenumber", {required: true, minLength: 6, maxLength: 12})} 
            className={errors.mobilenumber ? "border border-red-500" : "border"}
          />
        </div>
        <div className="flex">
          <label htmlFor="title" className="w-[120px]">Title</label>
          <select id="title" {...register("title", { required: true })}
            className={errors.title ? "border border-red-500" : "border"}
          >
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Miss">Miss</option>
            <option value="Dr">Dr</option>
          </select>
        </div>

        <div className="flex">
          <input id="dev" {...register("developer", { required: true })} type="radio" value="Yes" />
          <label htmlFor="dev" >Developer</label>
        </div>
        <div className="flex">
          <input id="hum" {...register("developer", { required: true })} type="radio" value="No" />
          <label htmlFor="hum" >Human</label>
        </div>

        <input type="submit" className="shadow bg-white p-4 text-blue-500 cursor-pointer"/>
      </form>

      <CardList data={personData} deleteData={deleteData}/>
    </main>
  );
}
