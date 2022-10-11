<template>
    <h1>CSS Selektoren und CSS Farben</h1>
    <ol>
      <li class="question">
        Berechnen Sie die Spezifität folgender CSS-Selektoren:
      </li>
      <table>
        <tr>
            <th>Selektoren</th>
            <th>Spezifität</th>
        </tr>
        <tr>
            <td>div div div:focus .inner</td>
            <td>1 + 1 + (1 + 10) + 10 = 23</td>
        </tr>
        <tr>  
            <td>h1 + div.main</td>
            <td>1 + (1 + 10) = 12</td>
        </tr>
        <tr>  
            <td>div a:link[href*='h-brs']</td>
            <td>1 + (1 + 10 + 10) = 22</td>
        </tr>
        <tr>  
            <td>nav > a:hover::before</td>
            <td>1 + 1 + 10 + 1 = 13</td>
        </tr>
        <tr>  
            <td>ul#primary-nav li.active</td>
            <td>1 + 100 + 1 + 10 = 112</td>
        </tr>
      </table>
      <li class="question">
        Rechnen Sie folgende RGB-Werte in HSL-Werte um:
      </li>
      <table>
        <tr>
            <th>RGB</th>
            <th>HSL</th>
        </tr>
        <tr>
            <td>#ffffff</td>
            <td>(0°, 0%, 100%)</td>
        </tr>
        <tr>  
            <td>#000</td>
            <td>(0°, 0%, 0%)</td>
        </tr>
        <tr>  
            <td>#ab0978</td>
            <td>(319°, 90%, 35.3%)</td>
        </tr>
        <tr>  
            <td>rgb(127,255,33)</td>
            <td>(95°, 100%, 56.5)</td>
        </tr>
        <tr>  
            <td>rgba(255,127,33,0.8)</td>
            <td>(25°, 100%, 56%)</td>
        </tr>
      </table>
    </ol>
  </template>