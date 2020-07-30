---
layout: post
title:  "📝 Relearning ML Derivations"
date:   2020-07-29 15:48:13 -0700
categories: posts
---

Through my pursuit of gaining more mathematical intuition for machine learning, I'm organizing my notes and derivations on foundational concepts here. 

## Neural Networks
<br>
<br>$$t^{(i)}$$ - correct label for training sample $$i$$
<br>$$y^{(i)}$$ - network output for training sample $$i$$
<br>
<br>L2 Loss:
<br>
<br> $$E =\frac{1}{2}\sum_i(t^{(i)} - y^{(i)})^{2}$$
<br>
<br>Intuitively, we want to minimize the difference between the actual and expected values i.e. we want $$E$$ to be as close to 0 as possible. Thus this minimization problem requires a methodology for finding weight values that minimize $$E$$.
<br>
### Delta Rule
<br>Fact: the gradient represents the derivative, the direction of steepest descent, in the $$n$$ dimensional space
<br>
<br>Idea: evaluate the gradient (the partial derivative) of the error function with respect to the settings of $$w_{i}$$ through $$w_{n}$$ in the $$n$$ dimensional plane to find the direction of steepest descent and accordingly update weights
<br>
<br>$$\Delta w_{k}=-\epsilon\frac{\partial{E}}{\partial{w_{k}}}$$
<br>$$=-\epsilon\frac{\partial}{\partial{w_{k}}}(\frac{1}{2}\sum_i(t^{(i)}-y^{(i)})^{2})$$
<br>$$=-\epsilon(\frac{1}{2}\sum_i2(t^{(i)}-y^{(i)})\frac{\partial}{\partial{w_{k}}}(t^{(i)}-y^{(i)}))$$
<br>$$=-\epsilon(\sum_i(t^{(i)}-y^{(i)})\frac{\partial}{\partial{w_{k}}}(t^{(i)}-y^{(i)}))$$
<br> Note: $$y^{(i)}=\sum_i(w_{k}^{(i)}x_{k}^{(i)})$$
<br>$$=-\epsilon(\sum_i(t^{(i)}-y^{(i)})\frac{\partial}{\partial{w_{k}}}(t^{(i)}-\sum_i(w_{k}^{(i)}x_{k}^{(i)})))$$
<br>$$=-\epsilon(\sum_i(t^{(i)}-y^{(i)})(\frac{\partial}{\partial{w_{k}}}(t^{(i)}) - \frac{\partial}{\partial{w_{k}}}(w_{k}^{(i)}x_{k}^{(i)}))$$
<br>$$=-\epsilon(\sum_i(t^{(i)}-y^{(i)})(\frac{\partial}{\partial{w_{k}}}(-w_{k}^{(i)}x_{k}^{(i)})))$$
<br>$$=-\epsilon(\sum_i(t^{(i)}-y^{(i)})(\frac{\partial}{\partial{w_{k}}}(-w_{k}^{(i)})x_k^{(i)}+\frac{\partial}{\partial{w_{k}}}(x_{k}^{(i)})w_{k}^{(i)}))$$
<br>$$=-\epsilon(\sum_i(t^{(i)}-y^{(i)})(-x_k^{(i)}))$$
<br>$$=\sum_i\epsilon x_k^{(i)}(t^{(i)}-y^{(i)})$$
### Simple Sigmoidal Neuron Example
<br>$$z=\sum_i w_k x_k$$ 
<br>
<br>$$y=\frac{1}{1+e^{-z}}$$ 
<br>
<br> Goal: compute the gradient of the error wrt $$w_k$$
<br>
<br>$$\frac{\partial{z}}{\partial{w_{k}}}=\frac{\partial}{\partial{w_{k}}}(\sum_i w_k x_k) = (0 + x_k) = x_k$$
<br>$$\frac{\partial{z}}{\partial{x_{k}}}=\frac{\partial}{\partial{x_{k}}}(\sum_i w_k x_k) = (0 + w_k) = w_k$$
<br>
<br> Note: $$1 - y = 1 - \frac{1}{1+e^{-z}}=\frac{1+e^{-z}}{1+e^{-z}}-\frac{1}{1+e^{-z}} = \frac{e^{-z}}{1+e^{-z}}$$
<br>
<br>$$\frac{\partial{y}}{\partial{z}}=\frac{\partial}{\partial{z}}(\frac{1}{1+e^{-z}}) = -\frac{\frac{\partial}{\partial{z}}(1+e^{-z})}{(1+e^{-z})^{2}}$$ Note: $$\frac{1}{u(x)}'=-\frac{u'(x)}{u(x)^{2}}$$
<br> $$= -\frac{\frac{\partial}{\partial{z}}({-z})e^{-z}}{(1+e^{-z})^{2}}=\frac{e^{-z}}{(1+e^{-z})^{2}} = e^{-z}\frac{1}{(1+e^{-z})}\frac{1}{(1+e^{-z})}=\frac{e^{-z}}{1+e^{-z}}\frac{1}{1+e^{-z}}= (1-y)(y)$$
<br>
<br>$$\frac{\partial{y}}{\partial{w_k}}=\frac{\partial{y}}{\partial{z}}\frac{\partial{z}}{\partial{w_k}} = y(1-y)x_k$$
<br>
<br>$$\frac{\partial{E}}{\partial{w_k}} = \sum_i\frac{\partial{E}}{\partial{y}^{(i)}}\frac{\partial{y}^{(i)}}{\partial{w_k}}=\frac{\partial{}}{\partial{y}}(\frac{1}{2}\sum_i(t^{(i)} - y^{(i)})^{2})(1-y^{(i)})x_k^{(i)}$$
<br>Note: $$\frac{\partial{}}{\partial{y}}(\frac{1}{2}\sum_i(t^{(i)} - y^{(i)})^{2})=(t^{(i)}-y^{(i)})(\frac{\partial}{\partial{y}}t^{(i)}-\frac{\partial}{\partial{y}}y^{(i)})=(t^{(i)}-y^{(i)})(-1)$$
<br>$$\frac{\partial{E}}{\partial{w_k}} = -\sum_i(t^{(i)}-y^{(i)})y^{(i)}(1-y^{(i)})x_k^{(i)}$$
<br>
<br>$$\Delta w_{k}=\sum_i\epsilon(t^{(i)}-y^{(i)})y^{(i)}(1-y^{(i)})x_k^{(i)}$$
### Backpropagation
<br>Rewriting E such that $$j$$ denotes neuron layer:
<br>
<br>$$E=\frac{1}{2}\sum_{j\in{output}}(t_j-y_j)^{2} => \frac{\partial{E}}{\partial{y_j}}=-(t_j-y_j)$$
<br>
<br>Induction: assuming we have error derivatives for layer $$j$$, we want to compute error derivatives for layer $$j-1$$, say $$i$$
<br>
<br>Note: the partial derivative of the logit with respect to the incoming output from layer $$i$$ is the weight of connection $$w_{ij}$$
<br>
<br>$$\frac{\partial{E}}{\partial{y_i}}=\sum_j\frac{\partial{E}}{\partial{z_j}}\frac{dz_j}{dy_i}=\sum_jw_{ij}\frac{\partial{E}}{\partial{z_{j}}}$$
<br>
<br>$$\frac{\partial{E}}{\partial{z_{j}}}=\frac{\partial{E}}{\partial{y_j}}\frac{dy_j}{dz_j}=y_j(1-y_j)\frac{\partial{E}}{\partial{y_j}}$$
<br>
<br>$$=>\frac{\partial{E}}{\partial{y_i}}=\sum_jw_{ij}y_j(1-y_j)\frac{\partial{E}}{\partial{y_j}}$$
<br>
<br>The above recursive definition enables the use of dynamic programming.
<br>
<br>$$\frac{\partial{E}}{\partial{w_{ij}}}=\frac{\partial{z_j}}{\partial{w_{ij}}}\frac{\partial{E}}{\partial{z_j}}=y_iy_j(1-y_j)\frac{\partial{E}}{\partial{y_j}}$$
<br>
<br>$$\Delta w_k=\sum_{k\in{dataset}}\epsilon y_i^{(k)}y_j^{(k)}(1-y_j^{(k)})\frac{\partial{E^{(k)}}}{\partial{y_j^{(k)}}}$$
<br>Thus the update rule above