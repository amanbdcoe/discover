import React from "react";
import "./TrendingFilter.scss";
import { MediaType, MediaTypeEnumUtils } from "../../../enum/media-type.enum";
import { TimeWindow, TimeWindowEnumUtils } from "../../../enum/time-window.enum";
import { CommonUtils } from "../../../utils/common-utils";
import { Field, Form, Formik} from "formik";

interface Props {
  onFilterChange: (filters: {media_type: MediaType, time_window: TimeWindow}) => void
}

const TrendingFilter: React.FC<Props> = (props: Props) => {

  const mediaType = CommonUtils.iterateEnum<MediaType>(MediaType);
  const timeWindow = CommonUtils.iterateEnum<TimeWindow>(TimeWindow);
  return (
   <Formik
     initialValues={{
       media_type: MediaType.MOVIE,
       time_window: TimeWindow.WEEK
     }}
     onSubmit={(values) => {
       props.onFilterChange(values);
     }}>
     {(formikProps) => {
       return (
         <div className="filter-container">
           <h3>Filter Options</h3>
           <hr/>
           <div className="form-container">
             <Form translate="yes">
               <Field name="media_type" as="select" className="select">
                 {mediaType.map((mType, index) => <option key={index} value={mType}>{MediaTypeEnumUtils.getMediaTypeTitle(mType)}</option>)}
               </Field>
               <Field name="time_window" as="select" className="select">
                 {timeWindow.map((tWindow, index) => <option key={index} value={tWindow}>{TimeWindowEnumUtils.getTimeWindowTitle(tWindow)}</option>)}
               </Field>
               <button type="submit">Submit</button>
             </Form>
           </div>
         </div>
        )
     }}
   </Formik>

  )
}

export default TrendingFilter
