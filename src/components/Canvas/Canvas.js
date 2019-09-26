import React from 'react';
import './Canvas.css';

function Canvas(props) {
  const { classes } = props;
  return (
    <div>


    <h2>Eisenhower Matrix</h2>
    <div className="wrapper">
        <div className="vertical-title-all">
            <div className="vertical">Importance</div>
        </div>

        <div className="border">
            <div className="sub-title">Important, Not Urgent</div>


These are the activities that help you achieve your personal and professional goals, and complete important work.
       
       Make sure that you have plenty of time to do these things properly, so that they do not become urgent. 
            Also, remember to leave enough time in your schedule to deal with unforeseen problems. This will maximize your chances of keeping on track, and help you avoid the stress of work becoming more urgent than necessary.
       
         </div>
        <div className="border">
            <div className="sub-title">Important, Urgent</div>

            There are two distinct types of urgent and important activities: ones that you could not have foreseen, and others that you've left until the last minute.

You can eliminate last-minute activities by planning ahead and avoiding procrastination  .

However, you can't always predict or avoid some issues and crises. Here, the best approach is to leave some time in your schedule to handle unexpected issues and unplanned important activities. (If a major crisis arises, then you'll need to reschedule other tasks.)

If you have a lot of urgent and important activities, identify which of these you could have foreseen, and think about how you could schedule similar activities ahead of time, so that they don't become urgent.
        </div>
        <div className="border">

            <div className="sub-title">Not Important, Not Urgent</div>
            
            These activities are just a distraction – avoid them if possible.

You can simply ignore or cancel many of them. However, some may be activities that other people want you to do, even though they don't contribute to your own desired outcomes. Again, say "no" politely, if you can, and explain why you cannot do it.

If people see that you are clear about your objectives and boundaries  , they will often avoid asking you to do "not important" activities in the future.
        </div>
        <div className="border">
            
            <div className="sub-title">Not Important, Urgent</div>

            Urgent but not important tasks are things that prevent you from achieving your goals. Ask yourself whether you can reschedule or delegate   them.

A common source of such activities is other people. Sometimes it's appropriate to say "no" to people politely, or to encourage them to solve the problem themselves. (Our article "'Yes' to the Person, 'No' to the Task"   will help here.)
        </div>

        <div className="horizont-title horizont-title-all">Urgency</div>
    </div>

    <h2>Leadership styles</h2>
    <div className="wrapper">
        <div className="title">
            <div className="vertical">Result</div>
        </div>

        <div className="border">Producer</div>
        <div className="border">Entrepreneur</div>

        <div className="title">
            <div className="vertical">Process</div>
        </div>
        <div className="border">Administrator</div>
        <div className="border">Integrator</div>

        <div className="horizont-title horizont-title-2">Short term</div>
        <div className="horizont-title">Long term</div>
    </div>




</div>
  );
}

export default Canvas;
