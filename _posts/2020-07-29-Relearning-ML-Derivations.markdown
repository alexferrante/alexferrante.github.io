---
layout: post
title:  "📝 Notes on 'Deep Learning In Python'"
date:   2020-07-29 15:48:13 -0700
categories: posts
---
Through my pursuit of gaining more mathematical intuition for machine learning, I'm organizing my notes and derivations on foundational concepts here. 
<br>
## Ch. 1-2: Neural Networks
<br>$$t^{(i)}$$ - correct label for training sample $$i$$
<br>$$y^{(i)}$$ - network output for training sample $$i$$
<br>
<br>L2 Loss: $$E =\frac{1}{2}\sum_i(t^{(i)} - y^{(i)})^{2}$$
<br>
<br>Intuitively, we want to minimize the difference between the actual and expected values i.e. we want $$E$$ to be as close to 0 as possible. Thus this minimization problem requires a methodology for finding weight values that minimize $$E$$.
<br>
### Delta Rule
<br>Fact: the gradient represents the derivative, the direction of steepest descent, in the $$n$$ dimensional space
<br>
<br>Idea: evaluate the gradient (the partial derivative) of the error function with respect to the settings of $$w_{i}$$ through $$w_{n}$$ in the $$n$$ dimensional plane to find the direction of steepest descent and accordingly update weights
<br>
<br>$$\Delta w_{k}=-\epsilon\frac{\partial{E}}{\partial{w_{k}}}$$
<br>
<br>$$=-\epsilon\frac{\partial}{\partial{w_{k}}}(\frac{1}{2}\sum_i(t^{(i)}-y^{(i)})^{2})$$
<br>
<br>$$=-\epsilon(\frac{1}{2}\sum_i2(t^{(i)}-y^{(i)})\frac{\partial}{\partial{w_{k}}}(t^{(i)}-y^{(i)}))$$
<br>
<br>$$=-\epsilon(\sum_i(t^{(i)}-y^{(i)})\frac{\partial}{\partial{w_{k}}}(t^{(i)}-y^{(i)}))$$
<br>
<br> Note: $$y^{(i)}=\sum_i(w_{k}^{(i)}x_{k}^{(i)})$$
<br>
<br>$$=-\epsilon(\sum_i(t^{(i)}-y^{(i)})\frac{\partial}{\partial{w_{k}}}(t^{(i)}-\sum_i(w_{k}^{(i)}x_{k}^{(i)})))$$
<br>$$=-\epsilon(\sum_i(t^{(i)}-y^{(i)})(\frac{\partial}{\partial{w_{k}}}(t^{(i)}) - \frac{\partial}{\partial{w_{k}}}(w_{k}^{(i)}x_{k}^{(i)}))$$
<br>$$=-\epsilon(\sum_i(t^{(i)}-y^{(i)})(\frac{\partial}{\partial{w_{k}}}(-w_{k}^{(i)}x_{k}^{(i)})))$$
<br>$$=-\epsilon(\sum_i(t^{(i)}-y^{(i)})(\frac{\partial}{\partial{w_{k}}}(-w_{k}^{(i)})x_k^{(i)}+\frac{\partial}{\partial{w_{k}}}(x_{k}^{(i)})w_{k}^{(i)}))$$
<br>$$=-\epsilon(\sum_i(t^{(i)}-y^{(i)})(-x_k^{(i)}))$$
<br>
<br>$$=\sum_i\epsilon x_k^{(i)}(t^{(i)}-y^{(i)})$$
<br>
### Simple Sigmoidal Neuron Example
<br>$$z=\sum_i w_k x_k$$ 
<br>
<br>$$y=\frac{1}{1+e^{-z}}$$ 
<br>
<br> Goal: compute the gradient of the error wrt $$w_k$$
<br>
<br>$$\frac{\partial{z}}{\partial{w_{k}}}=\frac{\partial}{\partial{w_{k}}}(\sum_i w_k x_k) = (0 + x_k) = x_k$$
<br>
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
<br>
<br>Note: $$\frac{\partial{}}{\partial{y}}(\frac{1}{2}\sum_i(t^{(i)} - y^{(i)})^{2})=(t^{(i)}-y^{(i)})(\frac{\partial}{\partial{y}}t^{(i)}-\frac{\partial}{\partial{y}}y^{(i)})=(t^{(i)}-y^{(i)})(-1)$$
<br>
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
### Gradient Descent
<br>
Batch Gradient Descent: use entire dataset to compute the error surface 
<br>
<br> con: sensitivity to saddle points, resulting in premature convergence
<br>
<br>Stoachistic Gradient Descent: use a single example to evaluate the error surface at each iteration
<br>
<br> con: poor approximation of the entire error surface
<br>
<br>Mini-batch Gradient Descent: use a subset (minibatch) of the total dataset to evaluate the error surface, such that the minibatch size is a hyperparameter
<br>
<br>$$\Delta w_k=\sum_{k\in{minibatch}}\epsilon y_i^{(k)}y_j^{(k)}(1-y_j^{(k)})\frac{\partial{E^{(k)}}}{\partial{y_j^{(k)}}}$$
<br>
### Mitigating overfitting
<br>
<br>Regularization: modify the objective function by adding additional terms with penalize large weights
<br>
<br>$$f{(\theta)}=Error+\lambda f{(\theta)}$$
<br>
<br>Note: $$f$$ grows as a function of the components of $$\theta$$
<br>
<br>Note: $$\lambda$$ is a hyperparameter that represents regularization strength i.e. the extent to which we want to prevent against overfitting
<br>
<br>L2 Regularization: for each weight $$w$$, add $$\frac{1}{2}\lambda w^{2}$$ to the error function
<br>Encourages the network to use all inputs less rather than a few inputs a lot
<br>
<br>Note: using L2 regularization ultimately means every weight is decayed linearly to 0
<br>
<br>L1 Regularization: for each weight $$w$$, add $$\lambda |{w}|$$ to the error function
<br>
<br>Note: since L2 empirically performs better, mainly only useful to understand which features are contributing to a decision
<br>
<br>
<br>Max Norm Constraints: restrict $$\theta$$ from becoming too large by enforcing absolute upper bound on $$||{w}||$$ for every neuron e.g. $$||{w}||>c$$
<br>
<br>Dropout: keep each neuron active with some probability $$p$$, a hyperparamter. Forces network to be accurate in the absence of information, preventing network from becoming dependent on a few neurons 
<br>
<br>$$E[output]=p\frac{x}{p}+(1-p) 0 = x$$
<br>Inverted dropout: due to the importance of having the performance of neurons during test time being equivalent to their peformance during training time, do scaling during training time; Any neuron whose activation hasn't been silenced has output divided by $$p$$ before value is propagated to the next layer
<br>
<br>
## Ch.3
<br>Challenge in optimizing models: must use minimal local information to infer the global structure of the error surface
<br>
<br>The error surface of deep neural networks are guaranteed to have a large number of local minima. Why?
<br>
<br>1) Within a layer of a fully connected, feed-froward network, any rearrangement of neurons will give the same final ouput at the end of the network. 
<br>
> Within a layer of $$n$$ neurons, there are $$n!$$ ways to rearrange parameters

> Within a deep network with $$l$$ layers, each with $$n$$ neurons, there are $$n!^{l}$$ equivalent configurations

<br> Local minima are problematic when they are "spurious" i.e. corresponding to a configuration of weights that incurs a higher error than the configuration at the global minimum
<br>
<br>Saddle points are "flat" critical points (i.e. point such that the gradient is the zero vector). As a function has increasingly many dimensions (parameters), saddle points become exponentially more likely than local minima. 
<br>
<br>Given that there are three types of critical points i.e. global min/max and local min, and assuming each configuration is equally likely, a random critical point in a random one-dimensional function has $$\frac{1}{3}$$ probability of being a local minimum $$=>$$ given $$k$$ critical points, we expect $$\frac{k}{3}$$ local minima
<br>
<br>Considering a cost function in the $$d$$ dimensional space: in general, in a $$d$$-dimensional paramter space, we can slice through a critical point on $$d$$ different axes
<br>
<br>A critical point can only be a local minimum if it is a local minimum for every $$d$$ one-dimensional subspace
<br>
<br>Given the fact that there are three types of critical points in the one-dimensional space, the probability that a random critical point is in a random function is $$\frac{1}{3^{d}}$$ $$=>$$ given $$k$$ critical points, we expect $$\frac{k}{3^{d}}$$ local minima
<br>
<br>Thus, as the dimensionality of a parameter space increases, local minima become exponentially more rare. This indicates that saddle points are a challenge but do not ultimately prevent SGD from converging to a good solution. However, this conclusion poses serious problems for methods that attempt to directly solve for a point s.t. the gradient is zero.
<br>
<br>Problem: only when the countours of the error surface are perfectly circular does the gradient always point in the direction of the minimum; the gradient isn't generally accurate for indicating good trajectory
<br>
<br>For every weight $$w_i$$ in the parameter space, the gradient computes $$\frac{\partial{E}}{\partial{w_i}}$$. Taken together over all weightsm the gradient gives the direction of steepest descent. 
<br>
<br>$$\frac{\partial({\frac{\partial{E}}{\partial{w_j}}})}{\partial{w_i}}$$ represents how the gradient component $$w_j$$ changes as $$w_i$$ changes
<br>
<br>The Hessian Matrix $$H$$'s properties (real, symmetric) allow the second derivative, approximating the curvature of the error surface, to be determined more efficiently.
<br>
<br>Given a unit vector $$d$$, the second derivative is given by $$d^{H}d$$. A second-order approximation via Taylor series reveals how the error function is impacted by moving from parameter vector $$x^{(i)}$$ to new parameter vector $$x$$ along the gradient vector $$g$$ evaluated at $$x^{(i)}$$
<br>
<br>$$E{(x)}\approx E{(x^{(i)})} + (x-x^{(i)})^{T}g+\frac{1}{2}(x-x^{(i)})^{T}H(x-x^{(i)})  $$