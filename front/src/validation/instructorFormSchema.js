import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('name must be at least 5 characters')
        .min(5, 'name must be at least 5 characters'),
    type: yup
        .string()
        .oneOf(['yoga', 'spin', 'pilates', 'kickboxing'], 'Class Type is required!'),
    day: yup
        .string()
        .oneOf(['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'], 'Please schedule a day!'),
    time: yup
        .string()
        .trim()
        .required('time must be at least 5 characters')
        .min(5, 'time must be at least 5 characters'),
    duration: yup
        .string()
        .oneOf(['30-min', '60-min', '90-min'], 'Class Duration is required!'),
    intensity: yup
        .string()
        .oneOf(['beginner', 'intermediate', 'advanced'], 'Class Intensity is required!'),
    location: yup
        .string()
        .oneOf(['gym-1', 'gym-2', 'studio-1', 'studio-2'], 'Class Location is required!'),
    max_capacity: yup
        .string()
        .trim()
        .required('Class Size Limit must be at least 1 character')
        .min(1, 'Class Size Limit must be at least 1 character'),
    punch_pass: yup.boolean(),

})

export default formSchema;