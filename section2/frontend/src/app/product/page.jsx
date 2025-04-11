'use client'
import { useFormik } from 'formik'
// import Link from 'next/link'
// import { useState } from 'react'
// import { useEffect } from 'react'
import 'ldrs/react/Infinity.css'

// Default values shown

import * as Yup from 'yup';
import React from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { Infinity } from 'ldrs/react'

const ProductSchema =  Yup.object().shape({
  name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  
      price: Yup.number()
      .typeError('Price must be a number')
      .required('Price is required')
      .positive('Price must be a positive number'),
    
      description: Yup.string().required('Description is required')
  });
  


const AddProduct = () => {
  // initializing formik
  // hook
  const router = useRouter()
  const productForm = useFormik(
    {
      initialValues: {
        name: '',
        price: '',
        description: '',

      },
      // event
      onSubmit: async (values, { resetForm, setSubmitting }) => {
        console.log(values);
        try {
          const res = await axios.post(
              `${process.env.NEXT_PUBLIC_API_URL}/product/add`,
              values
          );
          
          console.log(res.data);
          console.log(res.status);
          console.log(res.statusText);
          toast.success('Product Added Successfully!');

          // router.push('/');

          resetForm();
      } catch (error) {
        toast.error(error?.response?.data?.message);
        console.log(error);
        setSubmitting(false);
      }
      // validationSchema: SignupSchema
    }
  
});



  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Product</h2>
      <form  onSubmit={productForm.handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Product Name</label>
          <input
            type="text"
            name="name"
            onChange={productForm.handleChange}
            value={productForm.values.name}
            className="w-full px-3 py-2 border rounded"
           
          />
        </div>
        {
                    (productForm.touched.name && productForm.errors.name) && (
                      <p className="text-xs text-red-600 mt-2" id="email-error">
                        {productForm.errors.name}
                      </p>

                    )
                  }

        <div className="mb-4">
          <label className="block mb-1 font-medium">Price</label>
          <input
            type="number"
            name="price"
            
            value={productForm.values.price}
            onChange={productForm.handleChange}
            className="w-full px-3 py-2 border rounded"
           
          />
        </div>
        {
                    (productForm.touched.price && productForm.errors.price) && (
                      <p className=" text-xs text-red-600 mt-2" id="email-error">
                        {productForm.errors.price}
                      </p>

                    )
                  }

        <div className="mb-4">
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            name="description"
            value={productForm.values.description}
            onChange={productForm.handleChange}
            className="w-full px-3 py-2 border rounded"
            rows="3"
           
          ></textarea>
        </div>
        {
                    (productForm.touched.description && productForm.errors.description) && (
                      <p className=" text-xs text-red-600 mt-2" id="email-error">
                        {productForm.errors.description}
                      </p>

                    )
                  }

   

<button disabled={productForm.isSubmitting}
                  type="submit"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  {
                    productForm.isSubmitting ? (
                      <Infinity
                        size="30"
                        speed="2.5"
                        color="white"
                      />
                    ): 'Add Product'
                  }
                 
                </button>
      </form>
    </div>
  );
};

export default AddProduct;
