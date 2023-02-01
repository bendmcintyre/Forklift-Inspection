import React, { Component } from "react";

export class Safety extends React.Component {
  render() {
    return (
      <div>
        <h1 id="safety-h1">OPERATING RULES</h1>
        <ol id="safety-rules">
          <li>
            Only trained and authorized personnel are allowed to operate a
            forklift.
          </li>
          <li>
            Inspect the forklift before use to ensure it is in good working
            condition.
          </li>
          <li>
            Wear proper personal protective equipment, including a hard hat,
            safety shoes, and safety glasses.
          </li>
          <li>Do not exceed the rated load capacity of the forklift.</li>
          <li>Keep the forklift's load low and centered for stability.</li>
          <li>Do not drive the forklift with the load raised or tilted.</li>
          <li>Always use the seatbelt when operating the forklift.</li>
          <li>
            Do not drive the forklift at excessive speeds or in an reckless
            manner.
          </li>
          <li>
            Be aware of your surroundings and watch out for pedestrians and
            other vehicles.
          </li>
          <li>Do not use the forklift to lift people or as a work platform.</li>
          <li>Be sure the path is clear before driving the forklift.</li>
          <li>
            Do not drive the forklift up to anyone standing in front of a fixed
            object.
          </li>
          <li>
            Shut off the forklift and set the brake when leaving the operator's
            seat.
          </li>
        </ol>
      </div>
    );
  }
}