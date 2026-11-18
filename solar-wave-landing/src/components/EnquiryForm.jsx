import React, {useState} from "react";
import {Link, useNavigate} from 'react-router-dom'
import {Button, Input, Logo} from "./index"
import { useDispatch } from "react-redux";
import {useForm} from "react-hook-form"

function Form() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")

    return (
        <div className="flex items-center justify-center w-full">
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-25">
                        <Logo width="100%"/>
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Submit Form</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    <div className="font-medium text-primary transition-all duration-200 hover:underline"></div>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                <form onSubmit={handleSubmit(form)} className='mt-8'>
                    <div className="space-y-5">
                        <Input
                            label="Email: "
                            placeholder="Enter your email"
                            type="email"
                            {...register("email", {
                                required: false,
                                validate: {
                                    matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email address must be a valid address",
                                }
                            })}
                        />
                        <Input
                            label="Mobile: "
                            placeholder="Enter your mobile number"
                            type="phone"
                            {...register("mobile", {
                                required: true,
                                validate: {
                                    matchPattern: (value) => /^(?:\+91|91|0)?[6-9]\d{9}$/.test(value) || "Mobile number should be valid"
                                }
                            })}
                        />
                        <Button
                            type="submit"
                            className='w-full'
                        >
                            Submit Details
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form