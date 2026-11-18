import React from "react";
import {Editor} from '@tinymce/tinymce-react'
import { Controller } from "react-hook-form";

export default function RTE() {
    return (
        <Editor
            intitialValue='default value'
            init={
                {
                    branding: false,
                    height: 500,
                    menubar: true,
                    plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount'
                    ],
                    toolbar: 
                        'undo redo | formatselect | bold italic backcolor | \
                        alignleft aligncenter alignright alignjustify |\
                        bullist numlist outdent indent | removeformat | help'
                }
            }
        />
    )
}