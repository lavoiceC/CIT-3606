# Lab 6 Python Streamlit

import streamlit as st

st.title("Tuition Calculator")
Base_tuition = 42540
fees = 2025

GPA = st.number_input("What is your high school GPA")
SAI = st.number_input("What is your Student Aid index")
st.write(f"Your GPA is: {GPA}")
checked = st.checkbox("Are you local if not don't select")

if checked:
    st.write("Congratulation you got a 5k scholarship")
    pell_grant = 5000
    st.balloons()
    
    

if GPA >= 3.5:
    st.write("You got a merit scholarship of 20K")
    st.balloons()
    st.write(f"Your tuition now cost: {Base_tuition - 20000}")

if SAI <= 7395: 
    st.write(f"Your pell grant is: { 7395 - SAI }")

st.write(f"Your Total: {SAI + GPA + checked + fees}")

https://streamlit.io/playground?example=blank&code=H4sIAAAAAAAAA4VS30vDMBB-z19x9MXKcJRtRRxOqHsQ8UXYQHwaWZutYWmuJFc2kf3vXtpu6BTMQ8kl34_cd9VVjY7Ak1OyMppAei6E8DQkTUbF0bLRpNHCXJq8MZLQRdfiUXq1ov5mBpNROknERinPxSgZpUI8vWa8ZxnbVGvlVtrWDcXRWykJtIcPbByUeluCz0tEA4xn3UX2_C9rQU2hLEGmC9C2UAfmMWPvNKl4E70HTHDXfgqfvDnyfV6qfKeKTrst1niIo8ypoAkGc2lAb8AiQYH2ihNRRuXEVMHHPX0qgNfZK5qj3TpJIZWQQ1DasoCEdNe2ZaTzpa5ZJPBqZcyK8fz0GaRJkpzU1tIYROvjDtd9gm3o4mEG42F66fx-tqoUn3x3A9zwCF5609_yl1GdpmhxDzl64tB-TPeG1Xgd-yjChO5ncDu-S6fwp2DoE7o-2xG0WJYJzFblkrBEkoaBATBomx6cEudd-KtaWp-L-AJjg62yswIAAA
