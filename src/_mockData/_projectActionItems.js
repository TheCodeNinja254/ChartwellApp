const _today = new Date();
const _dateX = new Date(_today);
_dateX.setDate(_dateX.getDate() + Math.random() * 10); // uses Math.random -- yes, yes, insecure.

const _projectActionItems = [
  {
    key: 1,
    defaultFor: "Slow Running",
    dueDate: _dateX.setDate(_dateX.getDate() + Math.random() * 10), // uses Math.random -- yes, yes, insecure.
    actionName: "Compare process parameters of fast and slow batches",
  },

  {
    key: 2,
    defaultFor: "Slow Running",
    dueDate: _dateX.setDate(_dateX.getDate() + Math.random() * 10), // uses Math.random -- yes, yes, insecure.
    actionName:
      "Hold problem solving workshop to understand key differences between fast and slow batches and see with team what can be controlled/maximized",
  },
  {
    key: 3,
    defaultFor: "Slow Running",
    dueDate: _dateX.setDate(_dateX.getDate() + Math.random() * 10), // uses Math.random -- yes, yes, insecure.
    actionName:
      "Conduct speed trial of machine/machines in key bottleneck process – recording changed parameters and results",
  },
  {
    key: 4,
    defaultFor: "Slow Running",
    dueDate: _dateX.setDate(_dateX.getDate() + Math.random() * 10), // uses Math.random -- yes, yes, insecure.
    actionName: "Implement speed changes once speed trials have been completed",
  },
  {
    key: 5,
    defaultFor: "Slow Running",
    dueDate: _dateX.setDate(_dateX.getDate() + Math.random() * 10), // uses Math.random -- yes, yes, insecure.
    actionName:
      "Conduct line study to verify improvement due to speed increases",
  },
  {
    key: 6,
    defaultFor: "Changeover",
    dueDate: _dateX.setDate(_dateX.getDate() + Math.random() * 10), // uses Math.random -- yes, yes, insecure.
    actionName:
      "Understand changeover(s) variations due to product type and line",
  },
  {
    key: 7,
    defaultFor: "Changeover",
    dueDate: _dateX.setDate(_dateX.getDate() + Math.random() * 10), // uses Math.random -- yes, yes, insecure.
    actionName: "Identify top running changeovers (take the most time)",
  },
  {
    key: 8,
    defaultFor: "Changeover",
    dueDate: _dateX.setDate(_dateX.getDate() + Math.random() * 10), // uses Math.random -- yes, yes, insecure.
    actionName: "Conduct line study of top running changeover(s)",
  },
  {
    key: 9,
    defaultFor: "Changeover",
    dueDate: _dateX,
    actionName:
      "Run SMED session for top running changeover(s) and create list of actions to implement",
  },
  {
    key: 10,
    defaultFor: "Changeover",
    dueDate: _dateX.setDate(_dateX.getDate() + Math.random() * 10), // uses Math.random -- yes, yes, insecure.
    actionName: "Assign and implement actions",
  },
  {
    key: 11,
    defaultFor: "Downtime",
    dueDate: _dateX.setDate(_dateX.getDate() + Math.random() * 10), // uses Math.random -- yes, yes, insecure.
    actionName:
      "Conduct line study to verify the types of downtime that exist in the data (long and seldom vs short and repetitive)",
  },
  {
    key: 12,
    defaultFor: "Downtime",
    dueDate: _dateX.setDate(_dateX.getDate() + Math.random() * 10), // uses Math.random -- yes, yes, insecure.
    actionName:
      "If short and repetitive, assign actions to teams to alleviate downtime causes.",
  },
  {
    key: 13,
    defaultFor: "Downtime",
    dueDate: _dateX.setDate(_dateX.getDate() + Math.random() * 10), // uses Math.random -- yes, yes, insecure.
    actionName:
      "If short, repetitive, and complex process-based issues, run problem solving workshop with team to better understand/identify possible fixes to problem",
  },
  {
    key: 14,
    defaultFor: "Downtime",
    dueDate: _dateX.setDate(_dateX.getDate() + Math.random() * 10), // uses Math.random -- yes, yes, insecure.
    actionName: "If long and seldom, understand the cause",
  },
  {
    key: 15,
    defaultFor: "Downtime",
    dueDate: _dateX.setDate(_dateX.getDate() + Math.random() * 10), // uses Math.random -- yes, yes, insecure.
    actionName:
      "Run problem solving workshop with team to better understand/identify possible fixes to problem",
  },
  {
    key: 16,
    defaultFor: "Downtime",
    dueDate: _dateX.setDate(_dateX.getDate() + Math.random() * 10), // uses Math.random -- yes, yes, insecure.
    actionName: "Create and implement actions",
  },
  {
    key: 17,
    defaultFor: "Waste/Yield/Quality",
    dueDate: _dateX.setDate(_dateX.getDate() + Math.random() * 10), // uses Math.random -- yes, yes, insecure.
    actionName: "Perform line study recording key waste streams to verify data",
  },
  {
    key: 18,
    defaultFor: "Waste/Yield/Quality",
    dueDate: _dateX.setDate(_dateX.getDate() + Math.random() * 10), // uses Math.random -- yes, yes, insecure.
    actionName: "Understand process and key causes for waste in waste streams",
  },
  {
    key: 19,
    defaultFor: "Waste/Yield/Quality",
    dueDate: _dateX.setDate(_dateX.getDate() + Math.random() * 10), // uses Math.random -- yes, yes, insecure.
    actionName:
      "Run problem solving workshop with team to better understand/identify possible fixes to problem",
  },
  {
    key: 20,
    defaultFor: "Waste/Yield/Quality",
    dueDate: _dateX.setDate(_dateX.getDate() + Math.random() * 10), // uses Math.random -- yes, yes, insecure.
    actionName: "Create and implement actions",
  },
  {
    key: 21,
    defaultFor: "Energy Cost Optimization",
    dueDate: _dateX.setDate(_dateX.getDate() + Math.random() * 10), // uses Math.random -- yes, yes, insecure.
    actionName: "Perform line study to understand key energy inefficiencies",
  },
  {
    key: 22,
    defaultFor: "Energy Cost Optimization",
    dueDate: _dateX.setDate(_dateX.getDate() + Math.random() * 10), // uses Math.random -- yes, yes, insecure.
    actionName: "Understand process and key causes for energy use",
  },
  {
    key: 23,
    defaultFor: "Energy Cost Optimization",
    dueDate: _dateX.setDate(_dateX.getDate() + Math.random() * 10), // uses Math.random -- yes, yes, insecure.
    actionName:
      "Run problem solving workshop with team to better understand/identify possible improvements",
  },
  {
    key: 24,
    defaultFor: "Energy Cost Optimization",
    dueDate: _dateX.setDate(_dateX.getDate() + Math.random() * 10), // uses Math.random -- yes, yes, insecure.
    actionName: "Create and implement actions",
  },
];

export default _projectActionItems;
